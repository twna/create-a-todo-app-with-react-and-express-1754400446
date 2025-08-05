const express = require('express');
const router = express.Router();

// Assuming we have a Todo model with a create method
const Todo = require('../models/todo');

// Route to add a new todo
router.post('/todos', async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    
    // Validate input
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    // Create a new todo
    const newTodo = await Todo.create({
      title,
      description,
      dueDate,
      priority
    });

    // Respond with the created todo
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
{
  "checklist": [
    "Define a POST route for adding new todos",
    "Extract todo details from the request body",
    "Validate the input data",
    "Create a new todo using the Todo model",
    "Respond with the created todo and a 201 status code",
    "Handle possible errors and respond with appropriate status codes"
  ]
}