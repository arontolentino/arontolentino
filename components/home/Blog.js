import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import styled from 'styled-components';
import Post from '../Post';
import PrimaryBtn from '../layout/PrimaryBtn';

const Section = styled('section')`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 4rem 0;
`;

const PostsContainer = styled('div')`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 4rem;
`;

const BtnContainer = styled('div')`
	display: flex;
	justify-content: flex-end;
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

			<BtnContainer>
				<PrimaryBtn href="/blog">View more posts</PrimaryBtn>
			</BtnContainer>
		</Section>
	);
};

export default Blog;
