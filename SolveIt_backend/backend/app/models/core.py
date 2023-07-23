from app.db.base_class import Base
from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)

    attempts = relationship("Attempt", back_populates="user")

class Challenge(Base):
    __tablename__ = "challenges"

    chall_id = Column(Integer, primary_key=True, index=True)
    chall_title = Column(String, nullable=False)
    chall_descrip = Column(String, nullable=False)
    chall_category = Column(String, nullable=False)
    chall_points = Column(Integer, nullable=False)
    flag_hash = Column(String, nullable=False)

    user_id = Column(Integer, ForeignKey("users.id"))
    author = relationship("User", back_populates="created_challenges")
    attempts = relationship("Attempt", back_populates="challenge")

class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    
    challenges = relationship("Challenge", back_populates="category")

class Attempt(Base):
    __tablename__ = "attempts"

    attempt_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    chall_id = Column(Integer, ForeignKey("challenges.id"))
    submitted_flag = Column(String, nullable=False)
    attempt_success = Column(Boolean, nullable=False)
    
    user = relationship("User", back_populates="attempts")
    challenge = relationship("Challenge", back_populates="attempts")

