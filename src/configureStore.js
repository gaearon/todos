import { createStore } from 'redux';
import todoApp from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
	const persistedState = loadState();
	const store = createStore(
		todoApp,
		persistedState // Whatever is passed as the second arg to createStore will end up as the state for the root reducer
	); // You can use the 2nd arg to hydrate the redux store with persisted data because it was obtained from redux
	// and therefor doesn't break encapsulation of reducers
	console.log(store.getState());

	store.subscribe(throttle(() => {
		saveState({
			todos: store.getState().todos
		});
	}, 1000));

	return store;
};

export default configureStore; // Its good to export it instead of having it store itself
// because when you're testing you can create as many instances as you want