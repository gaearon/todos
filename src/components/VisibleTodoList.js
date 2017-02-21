import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'; // Takes a component and returns a new component that injects router related props (like params) inside your component
import * as actions from '../actions';
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
			receiveTodos(filter, todos) // So we call the callback prop receiveTodos
		); // b/c fetchTodos is async, It's important to destructure the props right away in case of quick navigation
	}

	render() {
		const { toggleTodo, ...rest } = this.props;
		return (
			<TodoList
				{...rest}
				onTodoClick={toggleTodo}
			/>
		);
	}
}

const mapStateToProps = (state, { params }) => { // { params } === ownProps.params
	const filter = params.filter || 'all'; // We get the params from withRouter call below
	return {
		todos: getVisibleTodos(state, filter), // now we can just pass the state b/c getVisibleTodos encapsulates all the knowledge
        filter,                      // about the application state shape
	} // explicitly passing filter as a prop makes it available inside the component
};

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (id) => { // when the args for the cb match the args for the action creator exactly
//       dispatch(toggleTodo(id)); // you can instead just pass a special obj. (with the names mapped) to connect
//     },
// });

VisibleTodoList = withRouter(connect( // withRouter subscribes to the router changes and
  mapStateToProps,	// connect subscribes to the redux store
  /*mapDispatchToProps*/
  actions // obj contains the cb func mapped to the action creator func we want to inject
)(VisibleTodoList));

export default VisibleTodoList;
