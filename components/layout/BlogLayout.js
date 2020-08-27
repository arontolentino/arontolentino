import React from 'react';
import styled from 'styled-components';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Wrapper = styled('div')`
	max-width: ${({ fullWidth }) => (!fullWidth ? '1400px' : 'none')};
	margin: 0 auto;
	padding: 0 4rem;
`;

const Main = styled('main')`
	display: flex;
	padding: 4rem 0;
`;

const Article = styled('article')`
	flex-grow: 1;
	/* margin-left: 4rem; */
	padding: 0 4rem;
`;

const BlogLayout = ({ children, tags }) => {
	return (
		<>
			<Wrapper>
				<NavHeader />

				<Main>
					<Sidebar tags={tags} />
					<Article>{children}</Article>
				</Main>
			</Wrapper>
			<Footer />
		</>
	);
};

export default BlogLayout;

export async function getStaticProps() {
	try {
		const uri = 'https://cms.arontolentino.com/graphql';

		const query = `
			query Tags {
				tags {
					edges {
						node {
							name
							slug
						}
					}
				}
			}
		`;

		const apolloFetch = createApolloFetch({ uri });

		const res = await apolloFetch({ query });

		return {
			props: {
				tags: res.data.tags.edges,
			},
		};
	} catch (err) {
		console.log(err.message);
	}
}
