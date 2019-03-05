import React from 'react';
import FilterLink from './FilterLink';
import './Footer.css'

const Footer = () => (
  <ul className="Footer" >
    <li>
      <FilterLink filter="all">
        All
      </FilterLink>
    </li>
    <li>
      <FilterLink filter="active">
        Active
      </FilterLink>
    </li>
    <li>
      <FilterLink filter="completed">
        Completed
      </FilterLink>
    </li>
  </ul>
);

export default Footer;
