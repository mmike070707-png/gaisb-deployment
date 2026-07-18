from fastapi import APIRouter

router = APIRouter()

@router.get("/api/applications")
def get_applications():
    return {"applications": [], "stats": {"total": 0}}

@router.get("/api/interview/{jobId}/questions")
def get_questions(jobId: str):
    return {"jobId": jobId, "questions": ["Question 1", "Question 2"]}
