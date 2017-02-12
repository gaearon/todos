import { combineReducers } from 'redux';
import todos from './todos';

const todoApp = combineReducers({
  todos,
});

export default todoApp;
