import os
from dotenv import load_dotenv
from fastapi_sqlalchemy import DBSessionMiddleware, db
import uvicorn
from schema import Restaurant as SchemaRestaurant
from models import Restaurant as ModelRestaurant
from fastapi import FastAPI
import math
import random   
load_dotenv(".env")

app = FastAPI()

app.add_middleware(DBSessionMiddleware, db_url=os.environ["DATABASE_URL"])

@app.get("/")
async def root():
    return {"message": "Hello World"}
#Creates a new restaurant


#function to create a new restaurant note that the restaurant id is unique and is auto incremented
@app.post("/restaurants")
async def create_restaurant(name : str, capacity : int):
    restaurant = ModelRestaurant(name = name, capacity = capacity, id = math.floor(random.random()*100))
    print(restaurant)
    db.session.add(restaurant)
    db.session.commit()
    return restaurant

#This will return all the restaurants
@app.get("/restauants/")     
async def get_restaurants():
    restaurants = db.session.query(ModelRestaurant).all()
    return restaurants


#This will return a restaurant based on the id
@app.get("/restaurants/{id}")
async def get_restaurant(id: int):
    restaurant = db.session.query(ModelRestaurant).get(id)
    return restaurant

@app.post("/customers")
async def create_customer(name : str, phoneNumber : str, partySize : int, restaurantId : int):
    customer = ModelCustomer(name = name, phoneNumber = phoneNumber, partySize = partySize, restaurantId = restaurantId)
    db.session.add(customer)
    db.session.commit()
    return customer
