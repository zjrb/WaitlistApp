from ast import Index
from sqlalchemy import Column, column, DateTime, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base = declarative_base()

class Restaurant(Base):
    __tablename__ = "Restaurants"
    id = Column(Integer, primary_key=True, index=True, unique=True)
    name = Column(String)
    capacity = Column(Integer)
class Queue(Base):
    __tablename__ = "Queues"
    id = Column(Integer, primary_key=True, index=True, unique=True)
    customer_id = Column(Integer, ForeignKey("Customers.id"))
    position = Column(Integer)
    partySize = Column(Integer)
   # customer = relationship("Customer", back_populates="queue")
    restaurant_id = Column(Integer, ForeignKey("Restaurants.id"))


class Customer(Base):
    __tablename__ = "Customers"
    id = Column(Integer, primary_key=True, index=True, unique=True)
    name = Column(String)
    phoneNumber = Column(String, unique=True)
    partysize = Column(Integer)
    restaurantId = Column(Integer, ForeignKey("Restaurants.id"))
#    queue = relationship("Queue", back_populates="customer")


