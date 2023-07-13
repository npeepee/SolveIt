# backend/app/tasks/health_check.py

from app.worker import celery_app
import requests
from app.models.core import User, Challenge
from app.crud.base import SessionLocal

@celery_app.task(name="ping")
def ping() -> None:
    resp = requests.get("http://backend:8000/ping")
    return resp.json()

@celery_app.task(name="check_user_system")
def check_user_system(user_id: int) -> str:
    session = SessionLocal()
    try:
        user = User.get(session, user_id)
    except Exception as e:
        return f"User system health check failed: {str(e)}"
    finally:
        session.close()
    return "User system health check passed"

@celery_app.task(name="check_challenge_system")
def check_challenge_system(challenge_id: int) -> str:
    session = SessionLocal()
    try:
        challenge = Challenge.get(session, challenge_id)
    except Exception as e:
        return f"Challenge system health check failed: {str(e)}"
    finally:
        session.close()
    return "Challenge system health check passed"
