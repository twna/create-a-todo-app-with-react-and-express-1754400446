const express = require('express');
const router = express.Router();

// Assuming todos are stored in an in-memory array for simplicity
let todos = [
  // ... existing todo items
];

// DELETE route to delete a todo by ID
router.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

module.exports = router;
{
  "checklist": [
    "Create DELETE route for todo",
    "Extract todo ID from request parameters",
    "Find todo index in the array",
    "Handle todo not found scenario with 404 response",
    "Delete the todo if found",
    "Send success response after deletion"
  ]
}