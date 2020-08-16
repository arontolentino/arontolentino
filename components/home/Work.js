import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../layout/SectionTitle';
import Project from '../Project';
import PrimaryBtn from '../layout/PrimaryBtn';

const Section = styled('section')`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 10rem 0;
`;

const ProjectsContainer = styled('div')`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 4rem;
`;

const BtnContainer = styled('div')`
	display: flex;
	justify-content: flex-end;
`;

const Work = ({ projects }) => {
	return (
		<Section id="work">
			<SectionTitle>
				<h2>Recent Work</h2>
			</SectionTitle>

			<ProjectsContainer>
				{projects.map(({ node: { project } }) => (
					<Project project={project} />
				))}
			</ProjectsContainer>

			<BtnContainer>
				<PrimaryBtn href="/work">View more work</PrimaryBtn>
			</BtnContainer>
		</Section>
	);
};

export default Work;
