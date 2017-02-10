import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
	todoApp,
	persistedState // Whatever is passed as the second arg to createStore will end up as the state for the root reducer
); // You can use the 2nd arg to hydrate the redux store with persisted data because it was obtained from redux
// and therefor doesn't break encapsulation of reducers
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
