import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';
import { fetchTodos } from './api';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
