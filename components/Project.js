import React from 'react';
import styled from 'styled-components';

const Overlay = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0;
	transition: all 0.5s cubic-bezier(0.25, 1, 0.33, 1);

	p {
		font-size: 4rem;
		z-index: 2;
	}

	:hover {
		opacity: 1;
	}
`;

const OverlayBG = styled('div')`
	background: #39f;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0.7;
`;

const Card = styled('a')`
	position: relative;
	flex: 0 0 48.5%;
	padding-top: 7rem;
	background: ${(props) => props.background};
	color: #fff;
	min-height: 60vh;
	margin-bottom: 5rem;

	:hover &${Overlay} {
		opacity: 0.7;
	}
`;

const Content = styled('div')`
	max-width: 80%;
	margin: 0 auto;
	text-align: center;
	min-height: 285px;

	h6 {
		font-size: 1.8rem;
	}

	h2 {
		font-size: 4.5rem;
	}

	p {
		font-size: 2.3rem;
	}
`;

const Image = styled('img')`
	max-width: 100%;
	height: auto;
	box-sizing: border-box;
	display: block;
`;

const Project = ({ project }) => {
	const {
		title,
		subtitle,
		cardColor,
		category,
		description,
		image: { mediaItemUrl },
	} = project;

	return (
		<Card href="#" background={cardColor}>
			<Overlay>
				<OverlayBG />
				<p>View Project</p>
			</Overlay>
			<Content>
				<h6>{category}</h6>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</Content>
			<Image src={mediaItemUrl} />
		</Card>
	);
};

export default Project;
