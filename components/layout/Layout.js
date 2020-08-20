import React from 'react';
import styled from 'styled-components';
import NavHeader from './NavHeader';
import Footer from './Footer';

const Wrapper = styled('div')`
	max-width: ${({ fullWidth }) => (!fullWidth ? '1600px' : 'none')};
	margin: 0 auto;
	padding: 0 4rem;
`;

const Layout = ({ children }) => {
	return (
		<>
			<Wrapper>
				<NavHeader />

				<main>{children}</main>
			</Wrapper>
			<Footer />
		</>
	);
};

export default Layout;
