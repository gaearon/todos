export const loadState = () => {
	try { // must wrap in try/catch due to getItem call, if the users privacy mode don't allow localStorage it will fail
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined; // to let the reducers intialize the app
	}
};

export const saveState = (state) => {
	try { // In redux apps your state should always be serializeable
		const serializedState = JSON.stringify(state); // stringify is an expensive operation so we don't want to call it all the time
		localStorage.setItem('state', serializedState);
	} catch (err) {
		// Ignore write errors.
	}
};