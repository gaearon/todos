import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import { fetchTodos } from './api';

fetchTodos('all').then(todos =>
  console.log(todos) // eslint-disable-line no-console
);

const store = configureStore();
render(
  <Root store={store} />,
  document.getElementById('root')
);
