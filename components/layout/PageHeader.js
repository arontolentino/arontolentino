import React from 'react';
import styled from 'styled-components';

const Section = styled('header')`
	padding: 5rem 0;
`;

const Title = styled('h2')`
	font-size: 4rem;
	font-weight: 700;
`;

const PageHeader = ({ children }) => {
	return (
		<Section>
			<Title>{children}</Title>
		</Section>
	);
};

export default PageHeader;
