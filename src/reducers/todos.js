import { combineReducers } from 'redux';
import todo from './todo';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case'ADD_TODO':
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds,
});

export default todos; // the default export is always the reducer func

const getAllTodos = (state) => // since we no longer have an array of todos
  state.allIds.map(id => state.byId[id]); // so we make a selector that creates one

export const getVisibleTodos = (state, filter) => { // but any export starting with get prepairs to data to be rendered by the UI
  const allTodos = getAllTodos(state);
  switch (filter) {                                 // These are called SELECTORS
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter(t => t.completed);
    case 'active':
      return allTodos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};