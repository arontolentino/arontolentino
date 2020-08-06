import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import styled from 'styled-components';

const Section = styled('section')`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4rem 0;
`;

const Blog = () => {
	return (
		<Section>
			<SectionTitle>
				<h2>From the blog</h2>
			</SectionTitle>
		</Section>
	);
};

export default Blog;
