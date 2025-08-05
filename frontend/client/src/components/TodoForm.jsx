import React, { useState } from 'react';

const AddTodoForm = ({ handleAddTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText.trim() !== '') {
      handleAddTodo(todoText);
      setTodoText(''); // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
{
  "checklist": [
    "Create a functional React component for the todo form",
    "Use useState hook to manage input state",
    "Include an input field for the todo text",
    "Include a submit button to add the todo",
    "Prevent form submission with empty input",
    "Clear the input field after successful submission",
    "Pass a handler function as a prop to manage adding todos"
  ]
}