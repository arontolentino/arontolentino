import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';

const BlogLayout = styled('div')`
	display: flex;
	padding: 4rem 0;
`;

const Sidebar = styled('aside')`
	flex: 0 0 24rem;
`;

const Main = styled('article')`
	flex-grow: 1;
	margin-left: 4rem;
`;

const ArticleList = styled('ol')`
	list-style: none;
`;

const PostsContainer = styled('div')``;

const Article = styled('li')`
	display: flex;
	justify-content: space-between;
	padding: 2.5rem 1.2rem;
	border-bottom: 0.5px solid #000;
`;

const Content = styled('a')`
	h3 {
		font-size: 3rem;
		line-height: 4.5rem;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1.8rem;
		margin-bottom: 3rem;
	}

	span {
		border-bottom: 5px solid transparent;
		transition: all 0.5s cubic-bezier(0.25, 1, 0.33, 1);
	}

	:hover {
		span {
			border-bottom: 5px solid #000;
		}
	}
`;

const Meta = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	flex: 0 0 17.5rem;
`;

const Date = styled('p')`
	font-size: 1.8rem;
	margin-bottom: 2rem;
`;
const Tag = styled('a')`
	font-size: 1.4rem;
	font-weight: 700;
	color: #fff;
	background: blue;
	padding: 1.5rem 2rem;
	border-radius: 0.5rem;
`;

const Blog = () => {
	return (
		<Layout>
			<Head>
				<title>Blog | Aron Tolentino</title>
			</Head>

			{/* <PageHeader>Blog</PageHeader> */}

			<BlogLayout>
				<Sidebar>Sidebar</Sidebar>
				<Main>
					<ArticleList>
						<Article>
							<Content href="#">
								<h3>
									<span>How to create your first VPS on DigitalOcean</span>
								</h3>
								<p>A complete guide from zero to having a DigitalOcean VPS</p>
							</Content>
							<Meta>
								<Date>August 20, 2020</Date>
								<div>
									<Tag href="#">Cloud</Tag>
								</div>
							</Meta>
						</Article>

						<Article>
							<Content href="#">
								<h3>
									<span>How to create your first VPS on DigitalOcean</span>
								</h3>{' '}
								<p>
									Here is how to retrieve the index of an item in a JS array
									based on its value
								</p>
							</Content>
							<Meta>
								<Date>August 20, 2020</Date>
								<div>
									<Tag href="#">Cloud</Tag>
								</div>
							</Meta>
						</Article>

						<Article>
							<Content href="#">
								<h3>
									<span>How to create your first VPS on DigitalOcean</span>
								</h3>
								<p>
									How I fixed a weird Error: Cannot find module
									gatsby-cli/lib/reporter error I got while creating a Gatsby
									site
								</p>
							</Content>
							<Meta>
								<Date>August 20, 2020</Date>
								<div>
									<Tag href="#">Cloud</Tag>
								</div>
							</Meta>
						</Article>

						<Article>
							<Content href="#">
								<h3>
									<span>
										How to solve the `util.pump is not a function` error in
										Node.js How to solve the
									</span>
								</h3>
								<p>
									How I fixed a weird Error: Cannot find module
									gatsby-cli/lib/reporter error I got while creating a Gatsby
									site
								</p>
							</Content>
							<Meta>
								<Date>August 20, 2020</Date>
								<div>
									<Tag href="#">Cloud</Tag>
								</div>
							</Meta>
						</Article>
					</ArticleList>
				</Main>
			</BlogLayout>

			<PostsContainer></PostsContainer>
		</Layout>
	);
};

export default Blog;
