import React from 'react';
import styled from 'styled-components';

const Btn = styled('a')`
	text-transform: uppercase;
	text-align: right;
	font-size: 1.8rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	padding: 0.1rem 1.5rem;
	border: 0.2rem solid #000;
	transition: all 0.5s cubic-bezier(0.25, 1, 0.33, 1);

	:hover {
		background: #000;
		color: #fff;
	}
`;

const PrimaryBtn = ({ children, href }) => {
	return <Btn href={href}>{children}</Btn>;
};

export default PrimaryBtn;
