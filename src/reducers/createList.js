const createList = (filter) => { // eslint-disable-line arrow-body-style
  return (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'RECEIVE_TODOS':
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };
};

export default createList;

export const getIds = (state) => state;
