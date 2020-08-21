import React from 'react';
import styled from 'styled-components';

const Aside = styled('aside')`
	flex: 0 0 24rem;

	h3 {
		margin-bottom: 1rem;
	}
`;

const Categories = styled('ul')`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
`;

const Category = styled('li')`
	margin-bottom: 2rem;
	margin-right: 0.75rem;

	a {
		font-size: 1.4rem;
		font-weight: 700;
		padding: 1rem;
		background: blue;
		color: #fff;
	}
`;

const Sidebar = ({ children }) => {
	return (
		<Aside>
			<h3>Intro</h3>
			<h3>Search</h3>

			<h3>Categories</h3>
			<Categories>
				<Category>
					<a href="#">CSS</a>
				</Category>
				<Category>
					<a href="#">Docker</a>
				</Category>
				<Category>
					<a href="#">GraphQL</a>
				</Category>
				<Category>
					<a href="#">JavaScript</a>
				</Category>
				<Category>
					<a href="#">HTML</a>
				</Category>
			</Categories>

			<h3>Newsletter</h3>
			<h3>Social Media</h3>
		</Aside>
	);
};

export default Sidebar;
