import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../layout/SectionTitle';
import Project from '../Project';
import ViewAllBtn from '../layout/ViewAllBtn';

const Section = styled('section')`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 4rem 0 2rem 0;
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
			<ViewAllBtn href="/work">
				<span>View more work</span>
			</ViewAllBtn>
		</Section>
	);
};

export default Work;
