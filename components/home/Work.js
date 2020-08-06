import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import styled from 'styled-components';

const Section = styled('header')`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4rem 0;
`;

const Work = () => {
	return (
		<Section>
			<SectionTitle>
				<h2>Recent Work</h2>
			</SectionTitle>
		</Section>
	);
};

export default Work;
