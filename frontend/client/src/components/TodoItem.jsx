import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
  const { text, isCompleted } = todo;

  return (
    <div className={`todo-item ${isCompleted ? 'completed' : ''}`}>
      <span className="todo-text">{text}</span>
      {isCompleted && <span className="todo-completed">✓</span>}
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  }).isRequired
};

export default TodoItem;
{
  "TodoItemComponent": [
    {"task": "Import React and PropTypes", "done": true},
    {"task": "Define TodoItem functional component", "done": true},
    {"task": "Destructure todo properties", "done": true},
    {"task": "Return div with conditional class and content", "done": true},
    {"task": "Define propTypes for TodoItem", "done": true},
    {"task": "Export TodoItem component", "done": true}
  ]
}