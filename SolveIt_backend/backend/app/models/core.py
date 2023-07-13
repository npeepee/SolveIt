# backend/app/models/core.py

from app.db.base_class import Base
from app.crud.base import CRUD
from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, Mapped, mapped_column

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)

    challenges = relationship("Challenge", back_populates="user")


class Challenge(Base, CRUD["Challenge"]):
    __tablename__ = "challenge"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )
    name: Mapped[str] = mapped_column(nullable=False)
    category: Mapped[str] = mapped_column(nullable=False)
    description: Mapped[str] = mapped_column(nullable=False)
    flag: Mapped[str] = mapped_column(nullable=False)
    points: Mapped[int] = mapped_column(nullable=False)
    difficulty: Mapped[str] = mapped_column(nullable=False)
    author: Mapped[str] = mapped_column(nullable=False)

    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="challenges")
    