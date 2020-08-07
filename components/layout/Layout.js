import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled('div')`
	max-width: ${({ fullWidth }) => (!fullWidth ? '1600px' : 'none')};
	margin: 0 auto;
	padding: 0 2rem;
`;

const Layout = ({ children }) => {
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

export default Layout;
