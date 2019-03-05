import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { getVisibleTodos, getIsFetching } from '../../reducers';
import TodoList from './TodoList';

class WrapedComponent extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props;
    const prevFilter = prevProps.filter;

    if (filter !== prevFilter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
      /* .then(() => console.log('done!')); */
  }

  render() {
    const { toggleTodo, isFetching, todos} = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    );
  }
}
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
    actions
  )(WrapedComponent)
);

export default VisibleTodoList;
