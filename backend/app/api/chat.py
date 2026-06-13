import json
import logging
from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import StreamingResponse
from ..models.schemas import ChatRequest
from ..services.llm_service import llm_service
from ..services.lead_service import lead_service
from ..utils.limiter import limiter

router = APIRouter()
logger = logging.getLogger(__name__)

@router.post("")
@limiter.limit("15/minute")
async def chat(request: Request, chat_payload: ChatRequest):
    """Chat endpoint that handles user messages and streams back the LLM's response
    and lead qualification state using Server-Sent Events (SSE).
    """
    async def event_generator():
        try:
            # Get completion generator from LLM service
            token_generator = llm_service.get_chat_response_stream(chat_payload.session_id, chat_payload.message, chat_payload.metadata)
            
            async for token in token_generator:
                # Retrieve the current state from the cache/database to sync with the frontend
                state = await lead_service.get_or_restore_state(chat_payload.session_id)
                state_data = {
                    "is_qualifying": state.is_qualifying,
                    "fields_collected": state.fields_collected,
                    "current_field": state.current_field,
                    # Provide visual progress data
                    "details": {
                        "name": state.name,
                        "email": state.email,
                        "phone": state.phone,
                        "company": state.company,
                        "industry": state.industry,
                        "service": state.service,
                        "budget": state.budget,
                        "timeline": state.timeline
                    }
                }
                
                payload = {
                    "token": token,
                    "state": state_data
                }
                
                yield f"data: {json.dumps(payload)}\n\n"
        except Exception as e:
            logger.error(f"Error in chat event stream: {e}", exc_info=True)
            error_payload = {
                "token": "\n\n[Connection Error: Please refresh or retry in a few moments.]",
                "state": {"is_qualifying": False, "fields_collected": [], "current_field": None, "details": {}}
            }
            yield f"data: {json.dumps(error_payload)}\n\n"

    return StreamingResponse(event_generator(), media_type="text/event-stream")
