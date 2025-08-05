const express = require('express');
const app = express();
app.use(express.json());

let todos = [
    // Example todos
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Write a blog post', completed: false },
    // ... other todos
];

app.put('/todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const updatedTodo = { ...todos[todoIndex], ...req.body };
    todos[todoIndex] = updatedTodo;

    res.json(updatedTodo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
{
  "checklist": [
    {"item": "Import required modules", "completed": true},
    {"item": "Create Express app", "completed": true},
    {"item": "Use JSON body parser middleware", "completed": true},
    {"item": "Define in-memory todos array", "completed": true},
    {"item": "Create PUT route for updating todo", "completed": true},
    {"item": "Handle todo not found error", "completed": true},
    {"item": "Update the todo", "completed": true},
    {"item": "Send updated todo in response", "completed": true},
    {"item": "Start the server", "completed": true}
  ]
}