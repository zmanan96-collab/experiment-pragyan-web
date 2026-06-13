from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List, Dict, Any
from datetime import datetime

# Chat Requests & Responses
class ChatRequest(BaseModel):
    message: str = Field(..., description="The user's input message")
    session_id: str = Field(..., description="The unique session ID to maintain history and memory")
    metadata: Optional[Dict[str, Any]] = Field(None, description="Optional silent lead metadata (email, name, company, etc.)")

class ChatResponse(BaseModel):
    message: str = Field(..., description="The assistant's text response")
    session_id: str = Field(..., description="The session ID used")

# Lead capture schema
class LeadCreate(BaseModel):
    name: str = Field(..., description="Lead's full name")
    email: EmailStr = Field(..., description="Lead's email address")
    phone: Optional[str] = Field(None, description="Lead's phone number")
    company: Optional[str] = Field(None, description="Lead's company/brand name")
    industry: Optional[str] = Field(None, description="Lead's industry")
    service: Optional[str] = Field(None, description="Required service description")
    budget: Optional[str] = Field(None, description="Project budget range")
    timeline: Optional[str] = Field(None, description="Project timeline")
    lead_score: Optional[str] = Field("LOW", description="Lead priority: HIGH, MEDIUM, LOW")
    lead_type: Optional[str] = Field("client", description="Lead type: 'client' or 'hiring'")
    conversation_summary: Optional[str] = Field(None, description="Summary of conversation key points")

class LeadResponse(LeadCreate):
    id: str
    created_at: datetime

# Lead Qualification Progress (Session State)
class QualificationState(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    company: Optional[str] = None
    industry: Optional[str] = None
    service: Optional[str] = None  # What they're looking for / challenge
    budget: Optional[str] = None
    timeline: Optional[str] = None
    is_qualifying: bool = False     # Flag to indicate active lead capture mode
    is_submitted: bool = False      # Track if lead has been successfully emailed/stored
    lead_type: str = "client"       # 'client' or 'hiring'
    fields_collected: List[str] = Field(default_factory=list) # List of fields already collected
    current_field: Optional[str] = None # Field currently being asked

# Database schema mappings
class DBMessage(BaseModel):
    id: Optional[str] = None
    conversation_id: str
    role: str
    content: str
    timestamp: Optional[datetime] = None

class DBConversation(BaseModel):
    id: Optional[str] = None
    session_id: str
    created_at: Optional[datetime] = None
