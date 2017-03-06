import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => ( // params is a react Router special param for passing params to components (see Root.js)
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
