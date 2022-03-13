from sqlalchemy.orm import Session
from db.models import Queue 
from pydantic_schemas import queue as schema


def get_by_phone_number(db: Session, phone_number: str):
    queue = db.query(Queue).filter(Queue.phone_number == phone_number).first()
    return queue

def get_queues(db: Session):
    queues = db.query(Queue).all()
    return queues
