import React from 'react';
import styled from 'styled-components';

const Section = styled('footer')`
	background: #000;
	color: #fff;
	text-align: center;
	padding: 2rem 0;

	p {
		font-size: 1.4rem;
	}
`;

const Footer = () => {
	return (
		<Section>
			<p>© 2020 — Developed by Aron Tolentino</p>
		</Section>
	);
};

export default Footer;
