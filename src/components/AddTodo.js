import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, addStatic } from '../actions';

// eslint-disable-next-line no-shadow
const AddTodo = ({ addTodo, addStatic }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          Add Todo
        </button>
      </form>

      <button onClick={addStatic}>
        Add Static
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  addStatic: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addTodo, addStatic,
};

export default connect(null, mapDispatchToProps)(AddTodo);
