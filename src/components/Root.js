import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App/App';
import configureStore from '../configureStore';

const store = configureStore();

const Root = (props) => (
  <Provider store={store}>
    <h1>Idiomatic Redux Todo List</h1>
    <BrowserRouter>
      <Route
        exact
        path="/:filter?"
        component={App}
        {...props}
      />
    </BrowserRouter>
  </Provider>
);

export default Root;
