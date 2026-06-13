# Use lightweight official Python runtime
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Install system dependencies (build-essential for numpy/torch compile if needed)
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend app code
COPY app/ ./app/

# Copy knowledge directory (necessary for RAG parsing)
COPY knowledge/ ./knowledge/

# Expose FastAPI port
EXPOSE 8000

# Set environment variables defaults
ENV PORT=8000
ENV HOST=0.0.0.0

# Start server using Uvicorn
CMD ["sh", "-c", "uvicorn app.main:app --host $HOST --port $PORT"]
