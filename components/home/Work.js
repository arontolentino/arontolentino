import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../layout/SectionTitle';
import Project from '../Project';

const Section = styled('section')`
	position: relative;
	padding: 4rem 0;
`;

const ProjectsContainer = styled('div')`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 4rem;
`;

const Work = () => {
	return (
		<Section id="work">
			<SectionTitle>
				<h2>Recent Work</h2>
			</SectionTitle>

			<ProjectsContainer>
				<Project />
				<Project />
				<Project />
				<Project />
			</ProjectsContainer>
		</Section>
	);
};

export default Work;
