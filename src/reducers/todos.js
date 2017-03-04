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

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

const todos = combineReducers({
  byId,
  idsByFilter,
});

export default todos; // the default export is always the reducer func

export const getVisibleTodos = (state, filter) => { // but any export starting with get prepairs the data to be rendered by the UI
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};