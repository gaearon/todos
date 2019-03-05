import * as api from '../api';
import { getIsFetching } from '../reducers';

const addTodo = text => ({
  type: 'ADD_TODO',
  text,
});

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});


const requestTodos = filter => ({
  type: 'REQUEST_TODOS',
  filter,
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
});

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));

  return api.fetchTodos(filter)
    .then(todos => dispatch(receiveTodos(filter, todos)));
};

export const addAsyncTodo = (filter, text) => (dispatch, getState) => {
  dispatch(addTodo(text));

  api.addTodo(filter, text)
    .then(todos => dispatch(receiveTodos(filter, todos)));
};
