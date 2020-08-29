import Head from 'next/head';
import { createApolloFetch } from 'apollo-fetch';
import Layout from '../components/layout/Layout';
import Work from '../components/home/Work';
import Blog from '../components/home/Blog';
import Hero from '../components/home/Hero';
import Newsletter from '../components/home/Newsletter';

const Home = ({ projects, posts }) => {
	console.log(projects);
	return (
		<Layout>
			<Head>
				<title>Home | Aron Tolentino</title>
			</Head>

			<Hero />
			<Work projects={projects} />
			<Blog posts={posts} />
			<Newsletter />
		</Layout>
	);
};

export default Home;

export async function getStaticProps() {
	try {
		const uri = 'https://cms.arontolentino.com/graphql';

		const query = `
			query Home {
				projects {
					edges {
						node {
							project {
								cardColor
								category
								description
								fieldGroupName
								subtitle
								title
								image {
									mediaItemUrl
								}
							}
						}
					}
				}
				posts(first: 10) {
					edges {
						node {
							title
							slug
							content
							summary {
								summary
							}
							date
							tags {
								edges {
									node {
										name
										slug
									}
								}
							}
						}
					}
				}
			}
		`;

		const apolloFetch = createApolloFetch({ uri });

		const res = await apolloFetch({ query });

		return {
			props: {
				projects: res.data.projects.edges,
				posts: res.data.posts.edges,
			},
		};
	} catch (err) {}
}
