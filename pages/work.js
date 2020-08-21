import Head from 'next/head';
import styled from 'styled-components';
import { createApolloFetch } from 'apollo-fetch';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled('div')`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 4rem;
`;

const Work = ({ projects }) => {
	return (
		<Layout>
			<Head>
				<title>Work | Aron Tolentino</title>
			</Head>

			{/* <PageHeader>Recent Work</PageHeader> */}

			<ProjectsContainer>
				{projects.map(({ node: { project } }) => (
					<ProjectCard project={project} fullWidth={true} />
				))}
			</ProjectsContainer>
		</Layout>
	);
};

export default Work;

export async function getServerSideProps() {
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
			}
		`;

		const apolloFetch = createApolloFetch({ uri });

		const res = await apolloFetch({ query });

		return {
			props: {
				projects: res.data.projects.edges,
			},
		};
	} catch (err) {}
}
