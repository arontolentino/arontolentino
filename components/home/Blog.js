import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import styled from 'styled-components';
import Post from '../Post';

const Section = styled('section')`
	position: relative;
	padding: 4rem 0;
`;

const PostsContainer = styled('div')`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 4rem;
`;

const Blog = () => {
	return (
		<Section>
			<SectionTitle>
				<h2>From the blog</h2>
			</SectionTitle>

			<PostsContainer>
				<Post />
				<Post />
				<Post />
			</PostsContainer>
		</Section>
	);
};

export default Blog;
