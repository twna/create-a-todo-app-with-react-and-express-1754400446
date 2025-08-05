from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Define the database connection string
DATABASE_URI = 'sqlite:///todos.db'

# Create the database engine
engine = create_engine(DATABASE_URI, echo=True)

# Create a declarative base class
Base = declarative_base()

# Define the Todo model
class Todo(Base):
    __tablename__ = 'todos'
    
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(String)
    completed = Column(Boolean, default=False)

# Create the database session
Session = sessionmaker(bind=engine)
session = Session()

# Create the tables in the database
Base.metadata.create_all(engine)
{
  "checklist": [
    "Import SQLAlchemy modules",
    "Define the database URI",
    "Create the database engine",
    "Define the base class for declarative class definitions",
    "Create the Todo model with appropriate fields",
    "Create the database session",
    "Create the tables in the database"
  ]
}