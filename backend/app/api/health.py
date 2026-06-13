from fastapi import APIRouter
from ..rag.vector_store import rag_store
from ..services.db_service import db_service

router = APIRouter()

@router.get("")
def health_check():
    """Returns the operational status of the service, RAG store, and DB layer."""
    return {
        "status": "healthy",
        "rag": {
            "loaded": len(rag_store.chunks) > 0,
            "chunks_count": len(rag_store.chunks),
            "model_initialized": rag_store.model is not None
        },
        "database": {
            "mode": "supabase" if db_service.use_supabase else "local_in_memory"
        }
    }
