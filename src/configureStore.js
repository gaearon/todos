import { createStore } from 'redux';
import todoApp from './reducers';

const logger = (store) => (next) => {
	if (!console.group) {
		return next;
	}
	return (action) => {
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue', action);
		const returnValue = next(action);
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	};
};

const promise = (store) => (next) => (action) => {
	if (typeof action.then === 'function') {
		return action.then(next);
	}
	return next(action);
};

const wrapDispatchWithmiddlewares = (store, middlewares) => {
	middlewares.slice().reverse().forEach(middleware =>
		store.dispatch = middleware(store)
	);
};

const configureStore = () => {
	const middlewares = [promise];
	const store = createStore(
		todoApp
		 // Whatever is passed as the second arg to createStore will end up as the state for the root reducer
	); // You can use the 2nd arg to hydrate the redux store with persisted data because it was obtained from redux
	// and therefor doesn't break encapsulation of reducers
	console.log(store.getState());

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}

	wrapDispatchWithmiddlewares(store, middlewares);

	return store;
};

export default configureStore; // Its good to export it instead of having it store itself
// because when you're testing you can create as many instances as you want