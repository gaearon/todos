import { connect } from 'react-redux';
import { withRouter } from 'react-router'; // Takes a component and returns a new component that injects router related props (like params) inside your component
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, { params }) => ({ // { params } === ownProps.params
    todos: getVisibleTodos(state.todos, params.filter || 'all'),
});

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (id) => { // when the args for the cb match the args for the action creator exactly
//       dispatch(toggleTodo(id)); // you can instead just pass a special obj. (with the names mapped) to connect
//     },
// });

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  /*mapDispatchToProps*/
  { onTodoClick: toggletodo } // obj contains the cb func mapped to the action creator func we want to inject
)(TodoList));

export default VisibleTodoList;
