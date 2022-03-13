from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQL_ALCHEMY_DATABASE_URL = "postgresql+psycopg2://postgres:DB_PASSWORD@db:5432/waitlist_db"

engine = create_engine(
    SQL_ALCHEMY_DATABASE_URL, connect_args={}, future = True
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, future = True )
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()