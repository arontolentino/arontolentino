import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createApolloFetch } from 'apollo-fetch';

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

const Sidebar = ({ tags }) => {
	return (
		<Aside>
			<h3>Intro</h3>
			<h3>Search</h3>

			<h3>Categories</h3>
			<Categories>
				{tags &&
					tags.map(({ node: { name, slug } }) => (
						<Category>
							<a href={`/tags/${slug}`}>{name}</a>
						</Category>
					))}
			</Categories>

			<h3>Newsletter</h3>
			<h3>Social Media</h3>
		</Aside>
	);
};

export default Sidebar;
