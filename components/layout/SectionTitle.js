import React from 'react';
import styled from 'styled-components';

const Title = styled('div')`
	h1,
	h2 {
		padding: 0 1rem;
		font-size: 1.8rem;
		font-weight: 900;
		width: 23rem;
		text-align: right;
		color: #fff;
		background: #000;
		text-transform: uppercase;
	}
`;

const SectionTitle = ({ children }) => {
	return <Title>{children}</Title>;
};

export default SectionTitle;
