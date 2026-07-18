from fastapi import APIRouter

router = APIRouter()

@router.post("/api/login")
def login(data: dict):
    return {"user": "example_user", "token": "mock-jwt-token"}

@router.post("/api/register")
def register(data: dict):
    return {"user": "new_user", "token": "mock-jwt-token"}
