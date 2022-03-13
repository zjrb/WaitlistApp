import fastapi
import os
from dotenv import load_dotenv
from fastapi_sqlalchemy import DBSessionMiddleware, db
import uvicorn
from db.models import Restaurant
from typing import Optional, List
from fastapi import FastAPI, Path
import math
import random  
router = fastapi.APIRouter()

#function to create a new restaurant note that the restaurant id is unique and is auto incremented
@router.post("/restaurants")
async def create_restaurant(name : str, capacity : int):
    restaurant = Restaurant(name = name, capacity = capacity, id = math.floor(random.random()*100))
    print(restaurant)
    db.session.add(restaurant)
    db.session.commit()
    return restaurant

#This will return all the restaurants
@router.get("/restauants/")     
async def get_restaurants():
    restaurants = db.session.query(Restaurant).all()
    return restaurants


#This will return a restaurant based on the id
@router.get("/restaurants/{id}")
async def get_restaurant(id: int = Path(..., gt=0)):
    restaurant = db.session.query(Restaurant).get(id)
    return restaurant