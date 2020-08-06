import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled('div')`
	max-width: ${({ fullWidth }) => (!fullWidth ? '1400px' : 'none')};
	margin: 0 auto;
	padding: 0 2rem;
`;

export default ({ children }) => {
	return (
		<>
			<Wrapper>
				<Header />

				<main>{children}</main>
			</Wrapper>
			<Footer />
		</>
	);
};
