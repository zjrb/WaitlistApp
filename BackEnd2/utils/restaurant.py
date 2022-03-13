from sqlalchemy.orm import Session
from db.models import Restaurant

def get_restaurants(db: Session):
    restaurants = db.query(Restaurant).all()
    return restaurants

def get_restaurant(db: Session, id: int):
    restaurant = db.query(Restaurant).get(id)
    return restaurant