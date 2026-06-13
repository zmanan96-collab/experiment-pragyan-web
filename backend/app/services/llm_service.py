import os
import asyncio
import logging
from typing import AsyncGenerator, List, Dict, Any, Optional
from groq import Groq

from .db_service import db_service
from .lead_service import lead_service
from ..rag.vector_store import rag_store
from ..prompts.system_prompt import SYSTEM_PROMPT

logger = logging.getLogger(__name__)

class LLMService:
    def __init__(self):
        self.api_key = os.getenv("GROQ_API_KEY", "")
        self.model = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")
        self.client = None
        
        if self.api_key and "placeholder" not in self.api_key:
            try:
                self.client = Groq(api_key=self.api_key)
                logger.info(f"Groq client successfully initialized with model {self.model}")
            except Exception as e:
                logger.error(f"Failed to initialize Groq client: {e}")
        else:
            logger.warning("Groq API Key not configured or placeholder detected. LLM completions will return offline mocks.")

    async def get_chat_response_stream(self, session_id: str, user_message: str, metadata: Optional[Dict[str, Any]] = None) -> AsyncGenerator[str, None]:
        """Orchestrates RAG, lead qualification state, history collection, and returns a stream generator."""
        
        # 1. Fetch conversation history
        conv_id = await db_service.get_or_create_conversation(session_id)
        db_history = await db_service.get_messages(conv_id)
        
        # Save user message to DB first
        await db_service.add_message(conv_id, "user", user_message)
        
        # Form message list for history
        history_list = [{"role": msg["role"], "content": msg["content"]} for msg in db_history]
        
        # Apply metadata silent lead parameters if provided (e.g. from URL parameters)
        if metadata:
            state = await lead_service.get_or_restore_state(session_id)
            updated = False
            for key, val in metadata.items():
                if val and hasattr(state, key) and getattr(state, key) is None:
                    setattr(state, key, val)
                    if key not in state.fields_collected:
                        state.fields_collected.append(key)
                    updated = True
            if updated:
                state.is_qualifying = True
                if state.name and state.email and state.service and not state.is_submitted:
                    state.is_submitted = True
                    await lead_service.submit_lead(session_id, state)
        
        # 2. Process lead qualification state machine
        state = await lead_service.process_user_message(session_id, user_message, history_list)
        
        # 3. Retrieve relevant chunks from RAG store
        # top_k=5 ensures enough context is retrieved to avoid missing details
        search_results = rag_store.search(user_message, top_k=5)
        context_str = ""
        if search_results:
            context_blocks = []
            for r in search_results:
                context_blocks.append(f"Source: {r['source']} (Section: {r['section']})\n{r['content']}")
            context_str = "\n\n---\n\n".join(context_blocks)
        else:
            context_str = "No specific knowledge base context found for this query."

        # 4. Formulate the system prompt
        formatted_system_prompt = SYSTEM_PROMPT.format(
            context=context_str,
            name=state.name or "Not collected",
            email=state.email or "Not collected",
            phone=state.phone or "Not collected",
            company=state.company or "Not collected",
            industry=state.industry or "Not collected",
            service=state.service or "Not collected",
            budget=state.budget or "Not collected",
            timeline=state.timeline or "Not collected"
        )

        # 5. Assemble messages for LLM API call
        # Include system prompt, database history, and the new message
        messages = [{"role": "system", "content": formatted_system_prompt}]
        messages.extend(history_list)
        messages.append({"role": "user", "content": user_message})

        # 6. Stream completion
        assistant_reply = ""
        
        # Fallback offline generator if Groq is not configured
        if not self.client:
            mock_reply = self._generate_mock_reply(user_message, state)
            for char in mock_reply:
                yield char
                # Small sleep to simulate typing
                await asyncio.sleep(0.01)
                assistant_reply += char
            # Save mock response
            await db_service.add_message(conv_id, "assistant", assistant_reply)
            return

        try:
            loop = asyncio.get_running_loop()
            
            # Groq stream completion executor
            def call_groq():
                return self.client.chat.completions.create(
                    model=self.model,
                    messages=messages,
                    stream=True,
                    temperature=0.3,
                    max_tokens=800
                )
                
            stream = await loop.run_in_executor(None, call_groq)
            
            for chunk in stream:
                token = chunk.choices[0].delta.content
                if token:
                    yield token
                    assistant_reply += token
                    await asyncio.sleep(0.005) # Yield to event loop
            
            # Save the fully accumulated assistant message to the DB
            await db_service.add_message(conv_id, "assistant", assistant_reply)
            
        except Exception as e:
            logger.error(f"Error during LLM completion stream: {e}", exc_info=True)
            error_message = f"I apologize, but I encountered a temporary connection issue. [DEBUG: {str(e)}]. Please contact our team directly at connect@mypragyan.com."
            yield error_message
            await db_service.add_message(conv_id, "assistant", error_message)

    def _generate_mock_reply(self, message: str, state: Any) -> str:
        """Generates high-quality offline replies when Groq API key is missing."""
        msg_lower = message.lower()
        
        # If in qualification mode, follow the field flow
        if state.is_qualifying:
            if state.current_field == "name":
                return "I'd love to help you get started with our services. To coordinate with our team, may I ask your full name?"
            elif state.current_field == "email":
                return f"Thank you, {state.name or 'there'}. What is your best email address where we can reach you?"
            elif state.current_field == "phone":
                return "Got it. Could you also share a phone number where we can contact you (optional but helpful)?"
            elif state.current_field == "company":
                return "Perfect. What is the name of your brand or company?"
            elif state.current_field == "industry":
                return "Thanks! What industry or type of business is your company in?"
            elif state.current_field == "service":
                return "And could you describe what you're looking for, or the main brand/marketing challenges you are facing?"
            elif state.current_field == "budget":
                return "Thank you. Do you have a rough budget range in mind for this project?"
            elif state.current_field == "timeline":
                return "And lastly, what is your preferred timeline or target launch date for this work?"
            else:
                return f"Thank you, {state.name or 'there'}! I've noted down all your details, and a member of the Pragyan team will reach out to you at {state.email or 'your email'} shortly. Is there anything else about our services or process I can answer for you today?"

        if "price" in msg_lower or "cost" in msg_lower or "budget" in msg_lower:
            return ("At Pragyan, we design every engagement from the ground up — based on your industry, "
                    "your audience, and the specific outcomes you're working toward. There is no standard package, "
                    "which means pricing is scoped individually for each client. We'd love to understand your needs first. "
                    "Would you like to start a conversation with our team?")
                    
        if any(w in msg_lower for w in ["job", "career", "hiring", "intern", "vacancy", "apply"]):
            return ("Pragyan is always looking for curious and motivated visual designers, strategists, copywriters, and marketing interns in Ahmedabad. "
                    "Our recruitment and interview process follows these 5 steps:\n\n"
                    "1. **Google Form Application**: Fill out your details in the application Google form (accessible via our Inquiry Page: https://www.mypragyan.com/inquiry).\n"
                    "2. **On-Call Introduction**: A brief initial phone conversation to align expectations.\n"
                    "3. **Personal Interview**: An in-person interview at our Ahmedabad office.\n"
                    "4. **Document Verification**: Review of academic records and professional documents.\n"
                    "5. **Final Round**: Final interview with agency leadership.\n\n"
                    "For all position-related questions, internships, or application follow-ups, contact our HR department directly:\n"
                    "- **HR Contact Name**: Aditi\n"
                    "- **HR Contact Number**: +91 99980 81393\n"
                    "- **HR Contact Email**: connect@mypragyan.com")

        if any(w in msg_lower for w in ["contact", "phone", "email", "number"]):
            return ("For client inquiries and brand strategy projects, please contact our Founder & Lead Brand Strategist, Dhruti Patel, directly at connect@mypragyan.com or +91 99980 81399.\n\n"
                    "For jobs, internships, or career opportunities, please reach out to our HR Manager, Aditi, at connect@mypragyan.com or +91 99980 81393.")

        if "who" in msg_lower or "about" in msg_lower or "what is pragyan" in msg_lower:
            return ("Pragyan is a brand strategy and communications agency based in Ahmedabad, India. "
                    "We partner with founders to build brands that are built on clarity, strategy, and long-term intent. "
                    "Would you like to hear about our services or our strategic process?")
                    
        if "service" in msg_lower or "what do you do" in msg_lower:
            return ("We offer Brand Strategy, Brand Identity & Visual Expression, Content Strategy, "
                    "Digital Marketing, Social & Community Management, and Personal Branding. "
                    "Is there a specific area your brand needs help with?")
                    
        if "process" in msg_lower or "how" in msg_lower:
            return ("We follow a four-stage strategy-first methodology: Listen, Think, Simplify, and Magnify. "
                    "Timelines are usually between 6 to 12 weeks. Would you like to set up a project inquiry with us?")

        return ("Hello! I am Pragyan's Brand Strategy Consultant. I can help you understand our services, process, "
                "or assist you in starting a project inquiry. If you're a job seeker, feel free to ask about our career opportunities.")

# Global LLM service instance
llm_service = LLMService()
