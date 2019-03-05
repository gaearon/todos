import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ filter, todos, onTodoClick }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(filter, todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  filter: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
