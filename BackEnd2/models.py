from ast import Index
from sqlalchemy import Column, column, DateTime, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base = declarative_base()

class Restaurant(Base):
    __tablename__ = "Restaurant"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    capacity = Column(Integer)



