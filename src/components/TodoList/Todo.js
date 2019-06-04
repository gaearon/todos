import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

const Todo = ({ onClick, completed, text }) => (
  <li
    className="Todo"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
