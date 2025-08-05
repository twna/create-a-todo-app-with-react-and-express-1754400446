import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TodoList;
{
  "checklist": [
    {
      "item": "Create TodoList component",
      "completed": true
    },
    {
      "item": "Map over todos array",
      "completed": true
    },
    {
      "item": "Render an unordered list",
      "completed": true
    },
    {
      "item": "Use PropTypes for validation",
      "completed": true
    }
  ]
}