const express = require('express');
const router = express.Router();

// Assuming Todo is a model that interacts with the database
const Todo = require('../models/Todo');

// Route to fetch all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetch all todos from the database
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error: error });
  }
});

module.exports = router;
{
  "checklist": [
    "Create a new Express router",
    "Import the Todo model",
    "Define a GET route for '/todos'",
    "Fetch todos from the database",
    "Return todos as a JSON response",
    "Handle errors with a 500 status code and error message",
    "Export the router"
  ]
}