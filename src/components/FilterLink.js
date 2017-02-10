import React from 'react';
import { Link } from 'react-router'; // We now want the router to be in control of any state that is in the url

const FilterLink = ({ filter, children }) => (
	<Link
		to={filter === 'all' ? '' : filter}
		activeStyle={{
			textDecoration: 'none',
			color: 'black'
		}}
	>
		{children}
	</Link>
);

export default FilterLink;