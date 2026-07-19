from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

# Root endpoint for backend API health check
@app.get("/api/health")
def health_check():
    return {"status": "ok"}

# Additional API routes for your Interview App go here
@app.get("/api/status")
def get_status():
    return {"status": "Interviewer App API active"}
