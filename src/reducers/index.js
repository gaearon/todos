import { combineReducers } from 'redux';
import byId, * as fromById from './byId';

const idsByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
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