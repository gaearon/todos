import { v4 } from 'node-uuid';

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'hey',
      completed: true,
    },
    {
      id: v4(),
      text: 'ho',
      completed: true,
    },
    {
      id: v4(),
      text: 'lets go',
      completed: false,
    },
  ],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500)
    .then(() => {
      switch (filter) {
        case 'all':
          return fakeDatabase.todos;
        case 'active':
          return fakeDatabase.todos.filter(todo => !todo.completed);
        case 'completed':
          return fakeDatabase.todos.filter(todo => todo.completed);
        default:
          throw Error(`Unknown filter: ${filter}`);
      }
    });

export const addTodo = (filter, todoText) =>
  delay(500)
    .then(() => fakeDatabase.todos.push({
      id: v4(),
      text: todoText,
      completed: false,
    }))
    .then(() => {
      switch (filter) {
        case 'all':
          return fakeDatabase.todos;
        case 'active':
          return fakeDatabase.todos.filter(todo => !todo.completed);
        case 'completed':
          return fakeDatabase.todos.filter(todo => todo.completed);
        default:
          throw Error(`Unknown filter: ${filter}`);
      }
    });

  export const toggleTodo = (filter, id) =>
    delay(500)
      .then(() => fakeDatabase.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      }))
      .then(() => {
        switch (filter) {
          case 'all':
            return fakeDatabase.todos;
          case 'active':
            return fakeDatabase.todos.filter(todo => !todo.completed);
          case 'completed':
            return fakeDatabase.todos.filter(todo => todo.completed);
          default:
            throw Error(`Unknown filter: ${filter}`);
        }
      });
