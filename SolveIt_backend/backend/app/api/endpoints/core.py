# backend/api/endpoints/core.py

from typing import List
from fastapi import APIRouter, HTTPException
from app.models.core import Challenge
from app.schemas.core import ChallengeCreateSchema, ChallengeUpdateSchema, ChallengeSchema
from app.api.deps import CurrentSession

router = APIRouter()

@router.get("/ping")
async def ping():
    return {"status": "ok"}

@router.post("/challenges", response_model=ChallengeSchema)
async def create_challenge(
    session: CurrentSession,
    challenge: ChallengeCreateSchema,
):
    new_challenge = await Challenge.create(session, data=challenge.dict())
    return new_challenge

@router.get("/challenges", response_model=List[ChallengeSchema])
async def read_challenges(session: CurrentSession):
    challenges = await Challenge.get_all(session)
    return challenges

@router.get("/challenges/{challenge_id}", response_model=ChallengeSchema)
async def read_challenge(session: CurrentSession, challenge_id: int):
    challenge = await Challenge.get(session, challenge_id)
    if not challenge:
        raise HTTPException(status_code=404, detail="Challenge not found")
    return challenge

@router.put("/challenges/{challenge_id}", response_model=ChallengeSchema)
async def update_challenge(session: CurrentSession, challenge_id: int, challenge: ChallengeUpdateSchema):
    updated_challenge = await Challenge.update(
        session, challenge_id, data=challenge.dict(exclude_unset=True)
    )
    if not updated_challenge:
        raise HTTPException(status_code=404, detail="Challenge not found")
    return updated_challenge

@router.delete("/challenges/{challenge_id}", response_model=ChallengeSchema)
async def delete_challenge(session: CurrentSession, challenge_id: int):
    deleted_challenge = await Challenge.delete(session, challenge_id)
    if not deleted_challenge:
        raise HTTPException(status_code=404, detail="Challenge not found")
    return deleted_challenge
