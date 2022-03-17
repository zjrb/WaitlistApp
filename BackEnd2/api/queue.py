import fastapi
import os
from dotenv import load_dotenv
from fastapi_sqlalchemy import DBSessionMiddleware, db
import uvicorn
from db.models import Restaurant, Queue
from typing import Optional, List
from fastapi import FastAPI, Path, Depends, HTTPException
import datetime
from utils.queue import get_queues, get_by_phone_number

import math
import random  
from db.db_setup import get_db
from utils.queue import get_by_phone_number
router = fastapi.APIRouter()

#function to create a new restaurant note that the restaurant id is unique and is auto incremented
@router.post("/queue")
async def put_user_in_queue(phone_number : str, name : str, partySize : int, db: DBSessionMiddleware = Depends(get_db)):
    queue = get_by_phone_number(db, phone_number)
    if queue:
        raise HTTPException(status_code=400, detail="User already in queue")
    position = db.query(Queue).count()
    new_queue = Queue(phone_number=phone_number, name=name, partySize=partySize, position=position)
    db.add(new_queue)
    db.commit()
    return new_queue

@router.get("/queue")
async def get_queue(db: DBSessionMiddleware = Depends(get_db)):
    queues = get_queues(db)
    return queues 

@router.get("/queue/getCurrentQueue")
async def get_current_queue(db: DBSessionMiddleware = Depends(get_db)):
    queue = db.query(Queue).order_by(Queue.position).first()
    db.delete(queue)
    db.commit()
    return queue

@router.get("/queue/getTimeInQueue/{phone_number}")
async def get_time_in_queue(phone_number: str, db: DBSessionMiddleware = Depends(get_db)):
    queue = get_by_phone_number(db, phone_number)
    return queue.created_at.time().minute

@router.get("/queue/getAverageTimeInQueue")
async def get_average_time_in_queue(db: DBSessionMiddleware = Depends(get_db)):
    queues = get_queues(db)
    total_time = 0
    for queue in queues:
        total_time += datetime. queue.created_at.time().minute
    return total_time/len(queues)
