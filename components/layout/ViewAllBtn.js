import React from 'react';
import styled from 'styled-components';

const Btn = styled('a')`
	text-transform: uppercase;
	text-align: right;
	font-size: 1.8rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;

	span {
		border-bottom: 5px solid transparent;
		transition: all 0.5s cubic-bezier(0.25, 1, 0.33, 1);
		padding-bottom: 0.5rem;

		:hover {
			border-bottom: 5px solid #000;
		}
	}
`;

const ViewAllBtn = ({ children, href }) => {
	return (
		<Btn href={href}>
			<span>{children}</span>
		</Btn>
	);
};

export default ViewAllBtn;
