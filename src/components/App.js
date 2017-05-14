import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import CenterFixed from './CenterFixed';
import DeleteAll from './DeleteAll';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <CenterFixed>
      <DeleteAll />
    </CenterFixed>
    <Footer />
  </div>
);

export default App;
