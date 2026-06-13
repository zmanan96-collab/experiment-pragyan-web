import os
import re
import logging
from typing import List, Dict, Any, Optional

logger = logging.getLogger(__name__)

# Try importing sentence-transformers & torch, fallback if not available
try:
    from sentence_transformers import SentenceTransformer
    import numpy as np
    HAS_TRANSFORMERS = True
except ImportError:
    logger.warning("sentence-transformers or numpy not installed. RAG will fallback to keyword-based search.")
    HAS_TRANSFORMERS = False

class DocumentChunk:
    def __init__(self, content: str, source: str, section_name: str):
        self.content = content
        self.source = source
        self.section_name = section_name
        self.embedding: Optional[Any] = None

class RAGVectorStore:
    def __init__(self, knowledge_dir: str = "knowledge", model_name: str = "all-MiniLM-L6-v2"):
        self.knowledge_dir = knowledge_dir
        self.model_name = model_name
        self.chunks: List[DocumentChunk] = []
        self.embeddings_matrix: Optional[Any] = None
        self.model: Optional[Any] = None
        self._model_loaded = False
        # Model is NOT loaded here — it is loaded lazily on first use to avoid blocking startup.

    def _ensure_model_loaded(self):
        """Lazily load the sentence-transformer model on first access."""
        if self._model_loaded:
            return
        self._model_loaded = True  # Set flag first to prevent re-entry
        if not HAS_TRANSFORMERS:
            return
        try:
            # Try loading from local cache first (no network required after first download)
            import torch  # noqa: F401  -- imported to surface missing dep early
            cache_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".model_cache")
            os.makedirs(cache_dir, exist_ok=True)
            try:
                self.model = SentenceTransformer(
                    self.model_name,
                    cache_folder=cache_dir,
                    local_files_only=True,
                )
                logger.info(f"Loaded embedding model from local cache: {self.model_name}")
            except Exception:
                # Not in cache yet — download once
                logger.info(f"Downloading embedding model for first time: {self.model_name}")
                self.model = SentenceTransformer(
                    self.model_name,
                    cache_folder=cache_dir,
                )
                logger.info(f"Embedding model downloaded and cached: {self.model_name}")
        except Exception as e:
            logger.error(f"Failed to load sentence-transformers model: {e}. Falling back to keyword search.")
            self.model = None

    def load_and_index(self):
        """Loads markdown files from the knowledge directory and indexes them."""
        self.chunks = []

        # knowledge/ is inside the backend/ folder, which is 3 levels up from backend/app/rag/
        # backend/app/rag/vector_store.py  → 1 up: rag/  → 2 up: app/  → 3 up: backend/
        backend_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
        resolved_knowledge_dir = os.path.join(backend_dir, self.knowledge_dir)

        if not os.path.exists(resolved_knowledge_dir):
            # Fallback 1: relative to current working directory
            resolved_knowledge_dir = os.path.abspath(self.knowledge_dir)
        if not os.path.exists(resolved_knowledge_dir):
            # Fallback 2: one level up from backend (website root)
            resolved_knowledge_dir = os.path.join(os.path.dirname(backend_dir), self.knowledge_dir)
        if not os.path.exists(resolved_knowledge_dir):
            logger.warning(f"Knowledge directory not found. Tried: backend/{self.knowledge_dir}, cwd/{self.knowledge_dir}")
            return

        logger.info(f"Loading knowledge documents from {resolved_knowledge_dir}")
        for filename in os.listdir(resolved_knowledge_dir):
            if filename.endswith(".md"):
                file_path = os.path.join(resolved_knowledge_dir, filename)
                self._parse_markdown_file(file_path, filename)
                
        logger.info(f"Loaded {len(self.chunks)} chunks from knowledge base.")
        
        # Generate embeddings — load model lazily here (first actual use)
        if HAS_TRANSFORMERS and self.chunks:
            self._ensure_model_loaded()
        if HAS_TRANSFORMERS and self.model and self.chunks:
            try:
                chunk_contents = [chunk.content for chunk in self.chunks]
                embeddings = self.model.encode(chunk_contents, convert_to_numpy=True)
                self.embeddings_matrix = np.array(embeddings)
                
                # Store back in chunks for individual reference if needed
                for idx, embedding in enumerate(embeddings):
                    self.chunks[idx].embedding = embedding
                logger.info("Successfully indexed vector embeddings.")
            except Exception as e:
                logger.error(f"Error during embedding generation: {e}")
                self.embeddings_matrix = None

    def _parse_markdown_file(self, file_path: str, filename: str):
        """Parses markdown file into logical sections based on headers."""
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Split content by markdown headers (## or ###)
        # We want to capture the header as well as the content following it
        sections = re.split(r'\n(##+ .*)\n', content)
        
        # The first item could be metadata or section 1 before any header
        first_section = sections[0].strip()
        if first_section:
            self.chunks.append(DocumentChunk(
                content=first_section,
                source=filename,
                section_name="Overview"
            ))
            
        # Iterate over header and corresponding body text pairs
        for i in range(1, len(sections), 2):
            if i + 1 < len(sections):
                header = sections[i].strip()
                body = sections[i + 1].strip()
                
                # Merge header and body to provide full context
                full_content = f"{header}\n\n{body}"
                
                # If the chunk is extremely large, we could split it further, but for our files,
                # splitting by header is perfectly sized (200-1000 characters).
                self.chunks.append(DocumentChunk(
                    content=full_content,
                    source=filename,
                    section_name=header.replace("#", "").strip()
                ))

    def search(self, query: str, top_k: int = 3) -> List[Dict[str, Any]]:
        """Searches the vector store for top_k most similar chunks."""
        if not self.chunks:
            return []
            
        # 1. Semantic search if embeddings matrix is available
        if HAS_TRANSFORMERS and self.embeddings_matrix is not None and self.model:
            try:
                query_embedding = self.model.encode(query, convert_to_numpy=True)
                
                # Compute Cosine Similarities
                dots = np.dot(self.embeddings_matrix, query_embedding)
                matrix_norms = np.linalg.norm(self.embeddings_matrix, axis=1)
                query_norm = np.linalg.norm(query_embedding)
                
                similarities = dots / (matrix_norms * query_norm + 1e-9)
                
                # Get indices of top_k results
                top_indices = np.argsort(similarities)[::-1][:top_k]
                
                results = []
                for idx in top_indices:
                    results.append({
                        "content": self.chunks[idx].content,
                        "source": self.chunks[idx].source,
                        "section": self.chunks[idx].section_name,
                        "score": float(similarities[idx])
                    })
                return results
            except Exception as e:
                logger.error(f"Semantic search failed: {e}. Falling back to keyword search.")
                
        # 2. Keyword fallback: Simple Jaccard similarity / TF overlap
        return self._keyword_search(query, top_k)

    def _keyword_search(self, query: str, top_k: int) -> List[Dict[str, Any]]:
        """Simple keyword matching fallback using word overlap."""
        def tokenize(text: str) -> set:
            # lowercase and extract words of 3+ chars
            return set(re.findall(r'\b\w{3,}\b', text.lower()))
            
        query_words = tokenize(query)
        if not query_words:
            # If query is too short, return first elements
            return [{
                "content": c.content,
                "source": c.source,
                "section": c.section_name,
                "score": 0.0
            } for c in self.chunks[:top_k]]
            
        scored_chunks = []
        for chunk in self.chunks:
            chunk_words = tokenize(chunk.content)
            overlap = query_words.intersection(chunk_words)
            
            # Score based on overlap ratio
            score = len(overlap) / (len(query_words) + 1e-9)
            scored_chunks.append((chunk, score))
            
        # Sort by score descending
        scored_chunks.sort(key=lambda x: x[1], reverse=True)
        
        results = []
        for chunk, score in scored_chunks[:top_k]:
            results.append({
                "content": chunk.content,
                "source": chunk.source,
                "section": chunk.section_name,
                "score": float(score)
            })
        return results

# Global RAG Instance for the App
rag_store = RAGVectorStore()

if __name__ == "__main__":
    # Test script execution
    logging.basicConfig(level=logging.INFO)
    store = RAGVectorStore(knowledge_dir="knowledge")
    store.load_and_index()
    test_query = "What services does Pragyan offer for brand strategy?"
    res = store.search(test_query, top_k=2)
    print(f"\n--- Search results for: '{test_query}' ---")
    for r in res:
        print(f"Source: {r['source']} | Section: {r['section']} | Score: {r['score']:.4f}")
        print(f"Content:\n{r['content']}\n" + "-"*40)
