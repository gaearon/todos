import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './AddTodo.css';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="AddTodo">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
