import { createStore } from 'redux';
import todoApp from './reducers';

const addLoggingToDispatch = (store) => {
	const rawDispatch = store.dispatch;
	if (!console.group) {
		return rawDispatch;
	}
	return (action) => {
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue', action);
		const returnValue = rawDispatch(action);
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	}
}

const addPromiseSupportToDispatch = (store) => {
	const next = store.dispatch;
	return (action) => {
		if (typeof action.then === 'function') {
			return action.then(next);
		}
		return next(action);
	};
};

const configureStore = () => {
	const store = createStore(
		todoApp
		 // Whatever is passed as the second arg to createStore will end up as the state for the root reducer
	); // You can use the 2nd arg to hydrate the redux store with persisted data because it was obtained from redux
	// and therefor doesn't break encapsulation of reducers
	console.log(store.getState());

	if (process.env.NODE_ENV !== 'production') {
		store.dispatch = addLoggingToDispatch(store);
	}

	store.dispatch = addPromiseSupportToDispatch(store);

	return store;
};

export default configureStore; // Its good to export it instead of having it store itself
// because when you're testing you can create as many instances as you want