import logging
import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# Load environment variables
env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), ".env")
print(f"Loading env from: {env_path}")
load_dotenv(env_path)
print(f"SUPABASE_URL: {os.getenv('SUPABASE_URL')}")

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger("app.main")

# Import slowapi for rate limiting
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler
from .utils.limiter import limiter

# Import routers and services
from .api.chat import router as chat_router
from .api.leads import router as leads_router
from .api.health import router as health_router
from .rag.vector_store import rag_store

# Create FastAPI app
app = FastAPI(
    title="Pragyan Agency AI Chatbot Backend",
    version="1.0.0",
    description="FastAPI Backend for Pragyan website AI Consultant widget with RAG & Lead capture"
)

# Configure rate limiting
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Configure CORS Middleware
# Enable origins from localhost (dev) and production domains
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
    # Production domains
    "https://www.mypragyan.com",
    "https://mypragyan.com",
    "https://pragyaan.in",
    "https://www.pragyaan.in",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register endpoints
app.include_router(chat_router, prefix="/api/chat", tags=["Chat"])
app.include_router(leads_router, prefix="/api/leads", tags=["Leads"])
app.include_router(health_router, prefix="/api/health", tags=["Health"])

@app.on_event("startup")
async def startup_event():
    logger.info("Starting up FastAPI application...")
    try:
        # Pre-load/Index markdown files on startup in background thread
        import asyncio
        logger.info("Scheduling RAG vector store indexing in background thread...")
        asyncio.create_task(asyncio.to_thread(rag_store.load_and_index))
        logger.info("RAG Vector store background indexing task scheduled.")
    except Exception as e:
        logger.error(f"Error scheduling startup vector store indexing: {e}")

@app.get("/")
def read_root():
    return {
        "message": "Welcome to Pragyan Agency AI Chatbot API. Access /api/health for system status."
    }
