from fastapi import APIRouter, HTTPException, Request
from typing import List, Dict, Any
from ..models.schemas import LeadCreate
from ..services.db_service import db_service
from ..utils.limiter import limiter

router = APIRouter()

@router.post("")
@limiter.limit("5/minute")
async def create_new_lead(request: Request, lead: LeadCreate):
    """Submits a lead manually through an HTTP API."""
    try:
        saved_lead = await db_service.create_lead(lead.model_dump())
        return saved_lead
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit lead: {str(e)}")

@router.get("")
@limiter.limit("10/minute")
async def get_captured_leads(request: Request):
    """Retrieves all captured leads from the system."""
    try:
        leads = await db_service.get_all_leads()
        return leads
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch leads: {str(e)}")
