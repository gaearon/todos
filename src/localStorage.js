export const loadState = () => {
	try { // must wrap in try/catch due to getItem call, if the users privacy mode don't allow localStorage it will fail
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};