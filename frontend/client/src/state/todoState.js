import React, { useReducer } from 'react';

// Define the initial state of todos
const initialState = {
  todos: []
};

// Define the types of actions we can dispatch
const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

// Define the reducer function to handle state changes based on dispatched actions
function todoReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

// Define the TodoApp component
const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = text => {
    dispatch({ type: actionTypes.ADD_TODO, payload: text });
  };

  const toggleTodo = id => {
    dispatch({ type: actionTypes.TOGGLE_TODO, payload: id });
  };

  const deleteTodo = id => {
    dispatch({ type: actionTypes.DELETE_TODO, payload: id });
  };

  // Render the UI for the todo application
  return (
    <div>
      <h1>Todo App</h1>
      {/* Add more UI elements here to add, toggle, and delete todos */}
    </div>
  );
};

export default TodoApp;
{
  "checklist": [
    {
      "item": "Define initial state",
      "completed": true
    },
    {
      "item": "Create reducer function",
      "completed": true
    },
    {
      "item": "Use useReducer hook",
      "completed": true
    },
    {
      "item": "Define action types",
      "completed": true
    },
    {
      "item": "Implement addTodo function",
      "completed": true
    },
    {
      "item": "Implement toggleTodo function",
      "completed": true
    },
    {
      "item": "Implement deleteTodo function",
      "completed": true
    }
  ]
}