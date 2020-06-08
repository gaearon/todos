/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getErrorMessage, getIsFetching } from '../reducers';
import TodoList from './TodoList';
import FetchError from './FetchError';
import * as fromList from '../reducers/createList';
import * as fromById from '../reducers/byId';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    console.log('VisibleTodoList : render');
    const { isFetching, errorMessage, toggleTodo, todos } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    );
  }
}

VisibleTodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  errorMessage: PropTypes.string,
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  console.log('VisibleTodoList : mapState');
  const filter = params.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    // Not optimized : return always a new ref obj todos
    // todos: getVisibleTodos(state, filter),
    filter,
    listByFilter: state.listByFilter,
    byId: state.byId,
  };
};

const mapDispatchToProps = {
  ...actions,
};

const mergeProps = (stateProps, dispatchProps) => {
  console.log('VisibleTodoList : mergeProps');
  const { byId, listByFilter, filter } = stateProps;

  // Optimize todos selectors in mergeProps
  const ids = fromList.getIds(listByFilter[filter]);
  const todos = ids.map(id => fromById.getTodo(byId, id));

  const newFncTest = () => {};
  return {
    ...stateProps,
    ...dispatchProps,
    todos,
    newFncTest,
  };
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(VisibleTodoList));

export default VisibleTodoList;
