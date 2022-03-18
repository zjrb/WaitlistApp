import os
from dotenv import load_dotenv
from fastapi_sqlalchemy import DBSessionMiddleware, db
import uvicorn
from fastapi import FastAPI, Path
import math
from api import queue, restaurant, messenger
import db.models as models
from db.db_setup import engine, Base
models.Base.metadata.create_all(bind=engine)


load_dotenv(".env")

app = FastAPI(
       title=  "Restaurant Queue",
        description= "A simple queue system for restaurants"
)


app.include_router(restaurant.router)
app.include_router(queue.router)
app.include_router(messenger.router)


# @app.get("/")
async def root():
    return {"message": "Hello World"}
#Creates a new restaurant