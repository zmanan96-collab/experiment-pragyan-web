import os
import json
import logging
from typing import Dict, Any, Tuple, Optional
from ..models.schemas import QualificationState
from .db_service import db_service
from .email_service import email_service
from groq import Groq

logger = logging.getLogger(__name__)

# List of fields in order of collection
REQUIRED_FIELDS = [
    ("name", "Full Name"),
    ("email", "Email Address"),
    ("service", "What you're looking for (your business need or challenge)")
]

OPTIONAL_FIELDS = [
    ("phone", "Phone Number"),
    ("company", "Company / Brand Name"),
    ("industry", "Industry / Type of Business"),
    ("budget", "Budget Range"),
    ("timeline", "Project Timeline")
]

# In-memory session state storage (session_id -> QualificationState)
_states_cache: Dict[str, QualificationState] = {}

class LeadService:
    def __init__(self):
        self.groq_api_key = os.getenv("GROQ_API_KEY", "")
        self.model = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")
        self.groq_client = None
        if self.groq_api_key and "placeholder" not in self.groq_api_key:
            self.groq_client = Groq(api_key=self.groq_api_key)

    async def get_or_restore_state(self, session_id: str) -> QualificationState:
        """Retrieves qualification state from cache or reconstructs it from message history."""
        if session_id in _states_cache:
            return _states_cache[session_id]

        # Reconstruction from DB history
        logger.info(f"Reconstruction qualification state for session: {session_id}")
        messages = await db_service.get_messages_by_session_id(session_id)
        
        # Default empty state
        state = QualificationState(
            name=None, email=None, phone=None, company=None,
            industry=None, service=None, budget=None, timeline=None,
            is_qualifying=False, fields_collected=[], current_field=None
        )

        if not messages or not self.groq_client:
            _states_cache[session_id] = state
            return state

        # Check if conversation contains buying intent or active qualification by prompting LLM
        history_text = "\n".join([f"{m['role'].upper()}: {m['content']}" for m in messages if m['role'] != 'system'])
        
        prompt = f"""Analyze the conversation history between a customer and a brand agency consultant chatbot.
Determine if the customer has expressed intent to hire the agency, start a project, or request a consultation, and extract any lead details mentioned.

Conversation history:
\"\"\"
{history_text}
\"\"\"

Return a JSON object with this exact structure:
{{
  "is_qualifying": true/false (true if they want to hire or start a project or are in the process of sharing contact info),
  "name": "extracted name or null",
  "email": "extracted email or null",
  "phone": "extracted phone or null",
  "company": "extracted company/brand name or null",
  "industry": "extracted industry or null",
  "service": "extracted description of what they need or null",
  "budget": "extracted budget or null",
  "timeline": "extracted timeline or null"
}}
Return ONLY raw valid JSON. No markdown backticks, no explanations.
"""
        try:
            chat_completion = self.groq_client.chat.completions.create(
                messages=[{"role": "user", "content": prompt}],
                model=self.model,
                temperature=0.0,
                response_format={"type": "json_object"}
            )
            data = json.loads(chat_completion.choices[0].message.content.strip())
            
            # Map values
            state.is_qualifying = data.get("is_qualifying", False)
            state.name = data.get("name")
            state.email = data.get("email")
            state.phone = data.get("phone")
            state.company = data.get("company")
            state.industry = data.get("industry")
            state.service = data.get("service")
            state.budget = data.get("budget")
            state.timeline = data.get("timeline")
            
            # Update fields_collected list
            for field, _ in REQUIRED_FIELDS + OPTIONAL_FIELDS:
                val = getattr(state, field)
                if val and val != "null":
                    state.fields_collected.append(field)
                    
            state.current_field = self._determine_next_field(state)
            
        except Exception as e:
            logger.error(f"Error restoring qualification state from history: {e}")
            
        _states_cache[session_id] = state
        return state

    def _determine_next_field(self, state: QualificationState) -> Optional[str]:
        """Looks at collected fields and returns the key of the next field to ask for."""
        for field_key, _ in REQUIRED_FIELDS:
            if getattr(state, field_key) is None:
                return field_key
        # After required fields, optionally check budget/timeline if not captured yet
        for field_key, _ in OPTIONAL_FIELDS:
            if getattr(state, field_key) is None:
                return field_key
        return None # All fields collected!

    async def detect_buying_intent(self, message: str, history: list) -> bool:
        """Determines if the user message shows buying intent/interest in agency services OR career interest."""
        if not self.groq_client:
            return False
            
        # Quick heuristics to speed things up
        heuristics = ["hire", "project", "need website", "need brand", "pricing", "cost", "quote", 
                      "consultation", "rebrand", "redesign", "marketing help", "proposal", "work with you",
                      "job", "internship", "intern", "career", "apply", "hiring", "vacancy", "position", "role"]
        msg_lower = message.lower()
        if any(h in msg_lower for h in heuristics):
            return True

        # LLM based detection
        history_text = "\n".join([f"{m['role']}: {m['content']}" for m in history[-4:]])
        prompt = f"""Analyze the latest user message and the short context. Does the user want to inquire about starting a project, hiring the agency, booking a consultation, learning how to work together, OR applying for a job/internship?
Context:
{history_text}
Latest Message: "{message}"

Return a JSON object:
{{"buying_intent": true/false}}
Return ONLY raw JSON. No explanation.
"""
        try:
            completion = self.groq_client.chat.completions.create(
                messages=[{"role": "user", "content": prompt}],
                model=self.model,
                temperature=0.0,
                response_format={"type": "json_object"}
            )
            res = json.loads(completion.choices[0].message.content.strip())
            return res.get("buying_intent", False)
        except Exception as e:
            logger.error(f"Error detecting buying intent: {e}")
            return False

    def _detect_lead_type(self, message: str, history: list) -> str:
        """Detects whether the user is a client prospect or a hiring candidate."""
        career_keywords = ["job", "internship", "intern", "career", "apply", "hiring", "vacancy", "position", "resume", "cv", "work at pragyan", "join your team"]
        msg_lower = message.lower()
        # Check message and recent history for career keywords
        history_text = " ".join([m.get("content", "").lower() for m in history[-6:]])
        if any(k in msg_lower or k in history_text for k in career_keywords):
            return "hiring"
        return "client"

    async def process_user_message(self, session_id: str, message: str, history: list) -> QualificationState:
        """Updates the state based on the latest message.
        
        KEY BEHAVIOUR:
        - ALWAYS scan every message for name/email regardless of intent.
        - As soon as name+email are captured, persist to Supabase.
        - lead_type is 'client' or 'hiring' based on conversation context.
        """
        state = await self.get_or_restore_state(session_id)

        if not self.groq_client:
            return state

        # ── STEP 1: Always try to extract name/email from every message ──────
        # This runs unconditionally so we never miss a contact detail.
        quick_extract_prompt = f"""Extract contact details from the user message below.
Return a JSON object with keys: "name", "email", "phone".
If a field is not present, return null for it.
Do NOT guess or invent values. Only extract what the user explicitly stated.

User Message: "{message}"

Return ONLY raw JSON. No explanation."""
        try:
            quick_completion = self.groq_client.chat.completions.create(
                messages=[{"role": "user", "content": quick_extract_prompt}],
                model=self.model,
                temperature=0.0,
                response_format={"type": "json_object"}
            )
            quick_data = json.loads(quick_completion.choices[0].message.content.strip())
            for field in ["name", "email", "phone"]:
                val = quick_data.get(field)
                if val and val not in ("null", "None", None):
                    if getattr(state, field) is None:  # Don't overwrite existing
                        setattr(state, field, val)
                        if field not in state.fields_collected:
                            state.fields_collected.append(field)
        except Exception as e:
            logger.error(f"Quick extract error: {e}")

        # ── STEP 2: Detect intent and set is_qualifying + lead_type ──────────
        if not state.is_qualifying:
            intent_detected = await self.detect_buying_intent(message, history)
            if intent_detected:
                state.is_qualifying = True
                state.lead_type = self._detect_lead_type(message, history)
                logger.info(f"Intent detected for session {session_id}. Type: {state.lead_type}")
        
        # Even if not yet qualifying, keep lead_type fresh from latest context
        if state.name or state.email:
            # If they mentioned hiring keywords anywhere in recent history, tag as hiring
            detected_type = self._detect_lead_type(message, history)
            if detected_type == "hiring":
                state.lead_type = "hiring"

        # ── STEP 3: If qualifying, do full field extraction ──────────────────
        if state.is_qualifying:
            current_data = {f: getattr(state, f) for f, _ in REQUIRED_FIELDS + OPTIONAL_FIELDS}
            full_prompt = f"""You are a data extractor for a CRM lead capture tool.
Given the current lead information and the user's latest message, extract any new fields provided.

Current lead info:
{json.dumps(current_data, indent=2)}

Latest User Message: "{message}"

Rules:
- Only extract what the user explicitly stated.
- Do NOT erase already known information unless the user explicitly corrects it.
- For service field: describe their business need or what they're looking for.
- For hiring candidates: service = the role/position they are applying for.

Return updated lead info as JSON with keys:
"name", "email", "phone", "company", "industry", "service", "budget", "timeline".
Use null for unknown fields.
Return ONLY valid JSON.
"""
            try:
                completion = self.groq_client.chat.completions.create(
                    messages=[{"role": "user", "content": full_prompt}],
                    model=self.model,
                    temperature=0.0,
                    response_format={"type": "json_object"}
                )
                extracted = json.loads(completion.choices[0].message.content.strip())
                for field in extracted:
                    val = extracted[field]
                    if val and val not in ("null", "None", None):
                        setattr(state, field, val)
                        if field not in state.fields_collected:
                            state.fields_collected.append(field)
            except Exception as e:
                logger.error(f"Full field extraction error: {e}")

        # Update next field pointer
        state.current_field = self._determine_next_field(state)

        # Persist state to cache
        _states_cache[session_id] = state

        # ── STEP 4: Submit to Supabase as soon as name + email are known ─────
        # This fires whether or not is_qualifying is True — we always want to
        # capture the contact the moment we have enough to reach them.
        if state.name and state.email and not state.is_submitted:
            state.is_submitted = True
            logger.info(f"name+email captured for session {session_id} (type={state.lead_type}). Saving to Supabase.")
            await self.submit_lead(session_id, state)

        return state

    def score_lead(self, state: QualificationState) -> Tuple[str, str]:
        """Calculates lead score (HIGH, MEDIUM, LOW) and generates description.
        HIGH: Clear business need (service details) + Budget available + Timeline under 3 months.
        MEDIUM: Business need identified + Budget uncertain or timeline longer.
        LOW: No clear project or no buying intent.
        """
        score = "LOW"
        reasons = []

        if not state.service:
            return "LOW", "No clear business need identified."

        reasons.append("Business need identified")
        
        # Check budget availability (check if not null and doesn't say uncertain/none)
        has_budget = False
        budget_str = state.budget.lower() if state.budget else ""
        if budget_str and "no" not in budget_str and "undecided" not in budget_str and "unknown" not in budget_str and "null" not in budget_str:
            has_budget = True
            reasons.append("Budget shared")

        # Check timeline (under 3 months)
        timeline_str = state.timeline.lower() if state.timeline else ""
        is_short_timeline = False
        if timeline_str:
            if "month" in timeline_str:
                # Find digits
                import re
                nums = re.findall(r'\b\d+\b', timeline_str)
                if nums and int(nums[0]) <= 3:
                    is_short_timeline = True
            elif "week" in timeline_str or "asap" in timeline_str or "immediate" in timeline_str or "now" in timeline_str:
                is_short_timeline = True
                
        if is_short_timeline:
            reasons.append("Short timeline (< 3 months)")

        # Scoring
        if has_budget and is_short_timeline:
            score = "HIGH"
        elif has_budget or is_short_timeline or state.company:
            score = "MEDIUM"
        else:
            score = "LOW"

        return score, ", ".join(reasons)

    async def submit_lead(self, session_id: str, state: QualificationState):
        """Processes lead submission: database storage and SMTP email."""
        logger.info(f"Triggering lead submission for session: {session_id} | type: {state.lead_type}")
        
        # Score the lead
        score, score_reasons = self.score_lead(state)
        
        # Fetch conversation history to build a summary
        messages = await db_service.get_messages_by_session_id(session_id)
        history_text = "\n".join([f"{m['role'].upper()}: {m['content']}" for m in messages if m['role'] != 'system'])
        
        summary = "No history available"
        if self.groq_client:
            summary_prompt = f"""Generate a concise, 3-4 sentence executive summary of this lead's business context, pain points, and current project requirements based on this conversation.
Conversation:
{history_text}

Executive Summary:"""
            try:
                completion = self.groq_client.chat.completions.create(
                    messages=[{"role": "user", "content": summary_prompt}],
                    model=self.model,
                    temperature=0.3
                )
                summary = completion.choices[0].message.content.strip()
            except Exception as e:
                logger.error(f"Error generating summary: {e}")
                summary = "Failed to generate conversation summary automatically."

        lead_data = {
            "name": state.name,
            "email": state.email,
            "phone": state.phone,
            "company": state.company,
            "industry": state.industry,
            "service": state.service,
            "budget": state.budget,
            "timeline": state.timeline,
            "lead_score": score,
            "lead_type": state.lead_type,
            "conversation_summary": summary
        }

        # Save to database
        saved = await db_service.create_lead(lead_data)
        logger.info(f"Lead saved to Supabase: {state.name} ({state.email}) | type={state.lead_type} | score={score}")
        
        # Send Email via SMTP
        await email_service.send_lead_email(lead_data, summary)
        logger.info(f"Lead processed and submitted successfully for {state.name} ({state.email})")

# Global lead service instance
lead_service = LeadService()
