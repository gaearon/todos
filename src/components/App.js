import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = ({ params }) => ( // params is a react Router special param for passing params to components (see Root.js)
  <div>
    <AddTodo />
    <VisibleTodoList
    	filter={params.filter || 'all'}
    />
    <Footer />
  </div>
);

export default App;
