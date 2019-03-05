import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import *  as actions from '../../actions';
import './AddTodo.css';

class WrappedComponent extends Component {
  render() {
    const filter = this.props.match.params.filter || 'all';

    let input;

    return (
      <div className="AddTodo">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.addAsyncTodo(filter, input.value);
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
  }
}

const AddTodo = compose(
  withRouter,
  connect(null, actions),
)(WrappedComponent);

export default AddTodo;
