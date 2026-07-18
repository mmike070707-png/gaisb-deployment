from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to 4HireAI API"}

# Add your routers here later
from fastapi import FastAPI
from app.routers import auth, jobs

app = FastAPI()

app.include_router(auth.router)
app.include_router(jobs.router)

@app.get("/")
def read_root():
    return {"message": "4HireAI API is operational"}
