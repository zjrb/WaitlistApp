#python3 -m venv venv
#pip install uvicorn 
#pip install fastapi
import os
from dotenv import load_dotenv
from fastapi_sqlalchemy import DBSessionMiddleware, db
import uvicorn
from schema import Restaurant as SchemaRestaurant
from models import Restaurant as ModelRestaurant
from fastapi import FastAPI

load_dotenv(".env")

app = FastAPI()

app.add_middleware(DBSessionMiddleware, db_url=os.environ["DATABASE_URL"])

@app.get("/")
async def root():
    return{"Test": "test"}

@app.post("/add-restaurant", response_model=SchemaRestaurant)
def add_restaurant(restaurant: SchemaRestaurant):
    db_restaurant = ModelRestaurant(id = restaurant.id, name= restaurant.name, capacity = restaurant.capacity)
    db.session.add(db_restaurant)
    db.session.commit()
    return db_restaurant

@app.get("/restaurants/")
def get_restaurants():
    restaurants = db.session.query(ModelRestaurant).all()
    return restaurants

@app.get("/restaurants/{id}")
def get_restaurant(id: int):
    restaurant = db.session.query(ModelRestaurant).filter(ModelRestaurant.id == id).first()
    return restaurant
