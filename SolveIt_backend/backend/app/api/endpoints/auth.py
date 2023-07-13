# backend/api/endpoints/auth.py

from app.exceptions import AppError
from app.models.auth import Authenticator, ALGORITHM, SECRET_KEY, User
from app.schemas.auth import (
    UserRegisterSchema,
    CurrentUserSchema,
    AuthSchema,
    TokenData,
    Token
)
from app.api.deps import CurrentSession
from app.models.auth import CurrentUser
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
import jwt

router = APIRouter()

@router.post("/create", response_model=CurrentUserSchema)
async def create_account(
    session: CurrentSession,
    data: UserRegisterSchema,
):
    if await User.get_by_username(session, data.username):
        raise HTTPException(status_code=400, detail="Username is already in use.")
    
    created_user = await User().register(session, data)
    return created_user

@router.get("/get", response_model=CurrentUserSchema)
async def get_account_name(
    session: CurrentSession,
    user: CurrentUser = Depends(get_current_user),
):
    return user

@router.post("/login", response_model=Token)
async def user_login(session: CurrentSession, form_data: OAuth2PasswordRequestForm = Depends()):
    data = AuthSchema(username=form_data.username, password=form_data.password)
    
    user = await User.get_by_username(session, data.username)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect username or password.")
    
    credentials = await User.login(session, data.username, data.password)
    if not credentials:
        raise HTTPException(status_code=401, detail="Incorrect username or password.")

    access_token = Authenticator.create_access_token(data={"sub": data.username})
    refresh_token = Authenticator.create_refresh_token(data={"sub": data.username})
    decoded_token = jwt.decode(access_token, SECRET_KEY, algorithms=[ALGORITHM])
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "exp": decoded_token["exp"],
        "refresh_token": refresh_token
    }

@router.post("/token/refresh")
async def refresh_access_token(form_data: OAuth2PasswordRequestForm = Depends(), session: CurrentSession = Depends()):
    return Authenticator.refresh_token(session, form_data.refresh_token)
