from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import null

from db.db_setup import Base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, func

class Restaurant(Base):
    __tablename__ = "Restaurants"
    id = Column(String, primary_key=True, index=True, unique=True)
    name = Column(String)
    capacity = Column(Integer)

class Queue(Base):
    __tablename__ = "Queue"
    phone_number = Column(String , primary_key=True, index=True, unique=True)
    name = Column(String)
    position = Column(Integer)
    partySize = Column(Integer)
    created_at = Column(DateTime, server_default=func.now())