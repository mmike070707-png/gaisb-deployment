from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "Interviewer App active"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
