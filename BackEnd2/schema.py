from pydantic import BaseModel

class Restaurant(BaseModel):
    id: int
    name: str
    capacity: int
    class Config:
        orm_mode = True

class Queue(BaseModel):
    id: int
    customer_id: int
    position: int
    partySize: int
    class Config:
        orm_mode = True

class Customer(BaseModel):
    id: int
    name: str
    phoneNumber: str
    partySize: int
    restaurantId: int
    class Config:
        orm_mode = True
