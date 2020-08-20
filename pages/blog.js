import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';

const PostsContainer = styled('div')`
	margin-top: 4rem;
`;

const Post = styled('div')``;

const Content = styled('div')``;

const Meta = styled('div')``;

const Date = styled('p')``;
const Tag = styled('p')``;

const Blog = () => {
	return (
		<Layout>
			<Head>
				<title>Blog | Aron Tolentino</title>
			</Head>

			<PageHeader>Blog</PageHeader>

			<PostsContainer>
				<Post>
					<Content>
						<h3>How to create your first VPS on DigitalOcean</h3>
						<p>A complete guide from zero to having a DigitalOcean VPS</p>
					</Content>
					<Meta>
						<Date></Date>
						<Tag></Tag>
					</Meta>
				</Post>
			</PostsContainer>
		</Layout>
	);
};

export default Blog;
