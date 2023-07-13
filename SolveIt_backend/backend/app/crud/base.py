from typing import TypeVar, Generic, Type
from sqlalchemy.orm import declared_attr
from sqlalchemy.orm.decl_api import DeclarativeMeta
from app.db.base_class import Base
from app.api.deps import CurrentSession
from app.models.core import Challenge
from passlib.context import CryptContext

ModelType = TypeVar("ModelType")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class ChallengeCRUD(Generic[ModelType]):
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__class__.__name__.lower()

    @classmethod
    async def create(
        cls: Type[ModelType], session: CurrentSession, data: dict
    ) -> ModelType:
        if 'flag' in data:
            data['flag'] = pwd_context.hash(data['flag'])
        obj = cls(**data)
        session.add(obj)
        await session.commit()
        return obj

    @classmethod
    async def get(cls: Base, session: CurrentSession, id: int) -> ModelType:
        stmt = select(cls).where(cls.id == id)
        result = await session.execute(stmt)
        return result.scalar_one_or_none()

    @classmethod
    async def update(
        cls: Base, session: CurrentSession, id: int, data: dict
    ) -> ModelType:
        stmt = (
            update(cls).
            where(cls.id == id).
            values(**data).
            execution_options(synchronize_session="fetch")
        )
        res = await session.execute(stmt)
        await session.commit()
        return res.scalar_one_or_none()

    @classmethod
    async def delete(cls: Base, session: CurrentSession, id: int) -> ModelType:
        stmt = delete(cls).where(cls.id == id)
        res = await session.execute(stmt)
        await session.commit()
        return res.rowcount

    @classmethod
    async def get_all(cls: Base, session: CurrentSession):
        stmt = select(cls)
        result = await session.execute(stmt)
        return result.scalars().all()

    #for flag verification after hashing
    @classmethod
    async def verify_flag(cls: Base, session: CurrentSession, id: int, flag: str) -> bool:
        challenge = await cls.get(session, id)
        if challenge:
            return pwd_context.verify(flag, challenge.flag)
        return False


#ChallengeCRUD is extended to the Generic[ModelType] which means it can be used to perform CRUD operations on any model class, not just Challenge. To be specific to the Challenge class, where applicable, replace all instances of cls with Challenge, and remove the Generic[ModelType] class extension and the ModelType type variable.