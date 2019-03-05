import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const isActive = (path, match, location) => !!(match || path === location.pathname);

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact={filter === 'all'}
    to={filter === 'all' ? '' : filter}
    activeClassName="active"
    isActive={isActive.bind(this, `/${filter}`)}
  >
    {children}
  </NavLink>
);

export default FilterLink;
