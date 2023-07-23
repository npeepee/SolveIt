from pydantic import BaseModel
from typing import List, Optional

# Define the common base schema
class CoreModel(BaseModel):
    class Config:
        orm_mode = True


# User Schema
class UserBase(CoreModel):
    username: str


class UserCreate(UserBase):
    hashed_password: str


class User(UserBase):
    id: int
    is_active: bool
    created_challenges: List["Challenge"]


# Challenge Schema
class ChallengeBase(CoreModel):
    title: str
    description: str
    category: str
    points: int
    flag_hash: str


class ChallengeCreate(ChallengeBase):
    user_id: int


class Challenge(ChallengeBase):
    id: int
    author: User
    attempts: List["Attempt"]


# Category Schema
class CategoryBase(CoreModel):
    name: str
    description: str


class CategoryCreate(CategoryBase):
    pass


class Category(CategoryBase):
    id: int
    challenges: List[Challenge]


# Attempt Schema
class AttemptBase(CoreModel):
    user_id: int
    challenge_id: int
    submitted_flag: str
    is_successful: bool
    timestamp: datetime


class AttemptCreate(AttemptBase):
    pass


class Attempt(AttemptBase):
    id: int
    user: User
    challenge: Challenge
