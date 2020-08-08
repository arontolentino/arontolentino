import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../layout/SectionTitle';

const Section = styled('section')`
	position: relative;
	padding: 0 0 2rem 0;
`;

const Newsletter = () => {
	return (
		<Section>
			<SectionTitle>
				<h2>Newsletter</h2>
			</SectionTitle>
		</Section>
	);
};

export default Newsletter;
