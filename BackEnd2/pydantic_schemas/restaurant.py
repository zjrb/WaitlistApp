from pydantic import BaseModel
class Restaurant(BaseModel):
    id: str
    name: str
    capacity: int

    class Config:
        orm_mode = True