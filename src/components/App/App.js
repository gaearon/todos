import React from 'react';
import Footer from '../FilterLink/Footer';
import AddTodo from '../AddTodo/AddTodo';
import VisibleTodoList from '../TodoList/VisibleTodoList';
import './App.css';

const App = () => (
  <div className="App">
    <Footer />
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
