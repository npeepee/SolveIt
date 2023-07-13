# backend/app/schemas/core.py

from typing import List, Optional
from pydantic import BaseModel

class ChallengeBase(BaseModel):
    title: str
    description: str
    category: str
    points: int

class ChallengeCreate(ChallengeBase):
    flag: str  # This will be hashed in the backend

class Challenge(ChallengeBase):
    id: int

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    challenges: List[Challenge] = []

    class Config:
        orm_mode = True
