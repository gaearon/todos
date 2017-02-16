import { connect } from 'react-redux';
import { withRouter } from 'react-router'; // Takes a component and returns a new component that injects router related props (like params) inside your component
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';


const mapStateToProps = (state, { params }) => ({ // { params } === ownProps.params
    todos: getVisibleTodos(state, params.filter || 'all'), // now we can just pass the state b/c getVisibleTodos encapsulates all the knowledge
});                               // about the application state shape

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (id) => { // when the args for the cb match the args for the action creator exactly
//       dispatch(toggleTodo(id)); // you can instead just pass a special obj. (with the names mapped) to connect
//     },
// });

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  /*mapDispatchToProps*/
  { onTodoClick: toggleTodo } // obj contains the cb func mapped to the action creator func we want to inject
)(TodoList));

export default VisibleTodoList;
