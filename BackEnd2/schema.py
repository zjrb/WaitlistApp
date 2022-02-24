from pydantic import BaseModel

class Restaurant(BaseModel):
    id: int
    name: str
    capacity: int

    class Config:
        orm_mode = True