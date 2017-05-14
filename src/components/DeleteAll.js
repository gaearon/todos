import React from 'react';
import { connect } from 'react-redux';
import { deleteAllTodos } from '../actions';

const DeleteAll = ({ dispatch }) => (
  <button onClick={() => {
    if (confirm('Delte all entries?')) {
      dispatch(deleteAllTodos());
    }
  }} style={{width: 100, height: 100, backgroundColor: 'red', color: 'white'}}>
    Delete All
  </button>
);

export default connect()(DeleteAll);
