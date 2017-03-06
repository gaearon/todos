import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});

const todos = combineReducers({
  byId,
  listByFilter,
});

export default todos; // the default export is always the reducer func

export const getVisibleTodos = (state, filter) => { // but any export starting with get prepairs the data to be rendered by the UI
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);