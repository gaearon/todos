import { v4 } from 'node-uuid';
import * as api from '../api';

export const requestTodos = (filter) => ({
	type: 'REQUEST_TODOS',
	filter,
});

const receiveTodos = (filter, response) => ({
	type: 'RECIEVE_TODOS',
	filter,
	response,
});

export const fetchTodos = (filter) =>
	api.fetchTodos(filter).then(response =>
		receiveTodos(filter, response)
	);

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});
