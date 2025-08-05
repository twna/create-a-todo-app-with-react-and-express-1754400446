from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Todo(Base):
    __tablename__ = 'todos'

    id = Column(Integer, primary_key=True)
    description = Column(String, nullable=False)
    is_completed = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    def __repr__(self):
        return f"<Todo(id={self.id}, description='{self.description}', is_completed={self.is_completed})>"
{
  "Todo Model Checklist": {
    "id": "Integer, Primary Key",
    "description": "String, Not Nullable",
    "is_completed": "Boolean, Not Nullable, Default False",
    "created_at": "DateTime, Not Nullable, Default Current Time",
    "updated_at": "DateTime, Nullable, Updated On Change"
  }
}