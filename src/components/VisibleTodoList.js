import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'; // Takes a component and returns a new component that injects router related props (like params) inside your component
import { toggleTodo, receiveTodos } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component { // The only reason we create a component here is b/c
	componentDidMount() { // you can't overwrite the lifecycle hooks of a generated component
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) {
			this.fetchData();
		}
	}

	fetchData() { // We want fetchTodos to become part of the redux store state but the only way
		// To integrate something into the state is to dispatch an ACTION
		const { filter, receiveTodos } = this.props;
		fetchTodos(filter).then(todos =>
			receiveTodos(todos) // So we call the callback prop receiveTodos
		); // It's important to destructure the props right away in case of quick navigation
	}

	render() {
		return <TodoList {...this.props} />;
	}
}

const mapStateToProps = (state, { params }) => { // { params } === ownProps.params
	const filter = params.filter || 'all';
	return {
		todos: getVisibleTodos(state, filter), // now we can just pass the state b/c getVisibleTodos encapsulates all the knowledge
        filter,                      // about the application state shape
	}
};

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (id) => { // when the args for the cb match the args for the action creator exactly
//       dispatch(toggleTodo(id)); // you can instead just pass a special obj. (with the names mapped) to connect
//     },
// });

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  /*mapDispatchToProps*/
  { onTodoClick: toggleTodo, receiveTodos } // obj contains the cb func mapped to the action creator func we want to inject
)(VisibleTodoList));

export default VisibleTodoList;
