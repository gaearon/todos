const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const nextState = { ...state }; // This shallow copy corresponds to the lookup table
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id]; // state corresponds to the state of byId reducer