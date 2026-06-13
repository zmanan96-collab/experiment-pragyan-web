import os
import logging
from typing import List, Dict, Any, Optional
from datetime import datetime

logger = logging.getLogger(__name__)

# Try to initialize Supabase client
supabase_url = os.getenv("SUPABASE_URL", "")
supabase_key = os.getenv("SUPABASE_KEY", "")

# Determine if we should use Supabase or local mock fallback
USE_SUPABASE = False
supabase_client = None

if supabase_url and supabase_key and "placeholder" not in supabase_url.lower():
    try:
        from supabase import create_client, Client
        supabase_client = create_client(supabase_url, supabase_key)
        USE_SUPABASE = True
        logger.info("Supabase client initialized successfully.")
    except Exception as e:
        logger.error(f"Failed to connect to Supabase: {e}. Falling back to in-memory database storage.")
else:
    logger.warning("Supabase URL or Key not configured. Using in-memory database storage.")

# Local In-Memory Storage for fallback
_local_conversations: Dict[str, Dict[str, Any]] = {}  # session_id -> conversation_info
_local_messages: Dict[str, List[Dict[str, Any]]] = {}  # conversation_id -> list of messages
_local_leads: List[Dict[str, Any]] = []

class DatabaseService:
    def __init__(self):
        self.use_supabase = USE_SUPABASE
        self.client = supabase_client

    async def get_or_create_conversation(self, session_id: str) -> str:
        """Retrieves or creates a conversation. Returns the conversation's UUID string."""
        if self.use_supabase and self.client:
            try:
                # Query existing conversation
                response = self.client.table("conversations").select("id").eq("session_id", session_id).execute()
                if response.data and len(response.data) > 0:
                    return response.data[0]["id"]

                # Create new conversation if not found
                insert_resp = self.client.table("conversations").insert({"session_id": session_id}).execute()
                if insert_resp.data and len(insert_resp.data) > 0:
                    return insert_resp.data[0]["id"]
                raise Exception("Failed to insert conversation into Supabase")
            except Exception as e:
                logger.error(f"Supabase get_or_create_conversation error: {e}. Using local storage.")
                
        # In-memory fallback
        if session_id not in _local_conversations:
            import uuid
            conv_id = str(uuid.uuid4())
            _local_conversations[session_id] = {
                "id": conv_id,
                "session_id": session_id,
                "created_at": datetime.utcnow().isoformat()
            }
            _local_messages[conv_id] = []
        return _local_conversations[session_id]["id"]

    async def add_message(self, conversation_id: str, role: str, content: str) -> Dict[str, Any]:
        """Saves a message to the chat history."""
        message_data = {
            "conversation_id": conversation_id,
            "role": role,
            "content": content
        }
        
        if self.use_supabase and self.client:
            try:
                response = self.client.table("messages").insert(message_data).execute()
                if response.data and len(response.data) > 0:
                    return response.data[0]
            except Exception as e:
                logger.error(f"Supabase add_message error: {e}. Saving locally.")

        # In-memory fallback
        import uuid
        local_msg = {
            "id": str(uuid.uuid4()),
            "conversation_id": conversation_id,
            "role": role,
            "content": content,
            "timestamp": datetime.utcnow().isoformat()
        }
        if conversation_id not in _local_messages:
            _local_messages[conversation_id] = []
        _local_messages[conversation_id].append(local_msg)
        return local_msg

    async def get_messages(self, conversation_id: str) -> List[Dict[str, Any]]:
        """Retrieves all messages for a given conversation sorted by timestamp."""
        if self.use_supabase and self.client:
            try:
                response = (
                    self.client.table("messages")
                    .select("*")
                    .eq("conversation_id", conversation_id)
                    .order("timestamp", desc=False)
                    .execute()
                )
                return response.data or []
            except Exception as e:
                logger.error(f"Supabase get_messages error: {e}. Fetching from local memory.")

        # In-memory fallback
        return _local_messages.get(conversation_id, [])

    async def get_messages_by_session_id(self, session_id: str) -> List[Dict[str, Any]]:
        """Utility to get messages directly by session_id."""
        conv_id = await self.get_or_create_conversation(session_id)
        return await self.get_messages(conv_id)

    async def create_lead(self, lead_data: dict) -> dict:
        """Saves a qualified lead to the correct Supabase table.
        - lead_type == 'client'  → leads table
        - lead_type == 'hiring'  → job_applications table
        """
        lead_type = lead_data.get("lead_type", "client")
        logger.info(f"create_lead called | type={lead_type} | use_supabase={self.use_supabase} | name={lead_data.get('name')} | email={lead_data.get('email')}")

        if self.use_supabase and self.client:
            try:
                if lead_type == "hiring":
                    # ── Hiring Candidate → job_applications table ──
                    db_record = {
                        "name": lead_data.get("name"),
                        "email": lead_data.get("email"),
                        "phone": lead_data.get("phone"),
                        "position": lead_data.get("service"),  # service field = role they want
                        "conversation_summary": lead_data.get("conversation_summary")
                    }
                    db_record = {k: v for k, v in db_record.items() if v is not None}
                    logger.info(f"Inserting job application to Supabase: {db_record}")
                    response = self.client.table("job_applications").insert(db_record).execute()
                else:
                    # ── Client Lead → leads table ──
                    db_record = {
                        "name": lead_data.get("name"),
                        "email": lead_data.get("email"),
                        "phone": lead_data.get("phone"),
                        "company": lead_data.get("company"),
                        "industry": lead_data.get("industry"),
                        "service": lead_data.get("service"),
                        "budget": lead_data.get("budget"),
                        "timeline": lead_data.get("timeline"),
                        "lead_score": lead_data.get("lead_score", "LOW"),
                        "lead_type": "client",
                        "conversation_summary": lead_data.get("conversation_summary")
                    }
                    db_record = {k: v for k, v in db_record.items() if v is not None}
                    logger.info(f"Inserting client lead to Supabase: {db_record}")
                    response = self.client.table("leads").insert(db_record).execute()

                if response.data and len(response.data) > 0:
                    table = "job_applications" if lead_type == "hiring" else "leads"
                    logger.info(f"✅ Saved to Supabase [{table}]: id={response.data[0].get('id')} | {lead_data.get('name')}")
                    return response.data[0]
                else:
                    logger.error(f"Supabase insert returned empty data: {response}")
            except Exception as e:
                logger.error(f"❌ Supabase create_lead error: {e}. Saving to memory instead.")

        # In-memory fallback
        import uuid
        local_record = {
            "id": str(uuid.uuid4()),
            **{k: lead_data.get(k) for k in ["name", "email", "phone", "company", "industry", "service", "budget", "timeline", "lead_score", "conversation_summary"]},
            "lead_type": lead_type,
            "created_at": datetime.utcnow().isoformat()
        }
        _local_leads.append(local_record)
        logger.info(f"⚠️ Saved in LOCAL memory (not Supabase): {lead_data.get('email')} | type={lead_type}")
        return local_record

    async def get_all_leads(self) -> List[Dict[str, Any]]:
        """Retrieves all client leads from the leads table."""
        if self.use_supabase and self.client:
            try:
                response = self.client.table("leads").select("*").order("created_at", desc=True).execute()
                return response.data or []
            except Exception as e:
                logger.error(f"Supabase get_all_leads error: {e}. Fetching from memory.")
        return [r for r in _local_leads if r.get("lead_type") != "hiring"]

    async def get_all_applications(self) -> List[Dict[str, Any]]:
        """Retrieves all job applications from the job_applications table."""
        if self.use_supabase and self.client:
            try:
                response = self.client.table("job_applications").select("*").order("created_at", desc=True).execute()
                return response.data or []
            except Exception as e:
                logger.error(f"Supabase get_all_applications error: {e}. Fetching from memory.")
        return [r for r in _local_leads if r.get("lead_type") == "hiring"]

# Global database service instance
db_service = DatabaseService()
