import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { getVisibleTodos, getIsFetching } from '../../reducers';
import TodoList from './TodoList';

const WrapedComponent = (props) => {
  const {
    toggleAsyncTodo,
    fetchTodos,
    isFetching,
    todos,
    filter
  } = props;

  useEffect(() => {
    fetchTodos(filter);
  }, [filter]);

  if (isFetching && !todos.length) {
    return <p>Loading...</p>;
  }

  return (
    <TodoList
      todos={todos}
      filter={filter}
      onTodoClick={toggleAsyncTodo}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  };
};

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    actions,
  )(WrapedComponent),
);

export default VisibleTodoList;
