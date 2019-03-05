import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact={filter === 'all'}
    to={filter === 'all' ? '' : filter}
    activeClassName="active"
  >
    {children}
  </NavLink>
);

export default FilterLink;
