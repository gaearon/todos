import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/(:filter)" component={App} />
		</Router>
	</Provider>
);

export default Root;

// (:filter) is wrapped in parens b/c it is OPTIONAL