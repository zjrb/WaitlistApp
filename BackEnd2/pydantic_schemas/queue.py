from pydantic import BaseModel
from datetime import datetime

class QueueBase(BaseModel):
    phone_number: str
    name: str
    partySize: int

class CreateQueue(QueueBase):
    ...

class Queue(QueueBase):
    created_at: datetime
    position: int 

    class Config:
        orm_mode = True
