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
	background: ${(props) => props.background};
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0.8;
`;

const Card = styled('a')`
	display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'block')};
	flex: ${({ fullWidth }) => (fullWidth ? '0 0 100%' : '0 0 48.5%')};
	justify-content: ${({ fullWidth }) => (fullWidth ? 'space-between' : 'auto')};
	align-items: ${({ fullWidth }) => (fullWidth ? 'center' : 'auto')};
	position: relative;
	padding-top: 7rem;
	padding: ${({ fullWidth }) => (fullWidth ? '5rem' : '7rem 0 0 0')};

	background: ${({ background }) => background};
	color: #fff;
	min-height: 60vh;
	margin-bottom: 5rem;

	:hover &${Overlay} {
		opacity: 0.7;
	}
`;

const Content = styled('div')`
	display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'block')};
	flex-direction: ${({ fullWidth }) => (fullWidth ? 'column' : 'auto')};
	justify-content: ${({ fullWidth }) => (fullWidth ? 'center' : 'auto')};
	flex: ${({ fullWidth }) => (fullWidth ? '0 0 42%' : 'auto')};
	text-align: ${({ fullWidth }) => (fullWidth ? 'left' : 'center')};
	max-width: 80%;
	margin: 0 auto;
	min-height: 300px;

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
	flex: ${({ fullWidth }) => (fullWidth ? '0 0 55%' : 'auto')};

	max-width: 100%;
	height: auto;
	box-sizing: border-box;
	display: block;
`;

const Project = ({ project, fullWidth }) => {
	const {
		title,
		subtitle,
		cardColor,
		category,
		description,
		image: { mediaItemUrl },
	} = project;

	return (
		<Card href="#" background={cardColor} fullWidth={fullWidth}>
			<Overlay>
				<OverlayBG background={cardColor} />
				<p>View Project</p>
			</Overlay>
			<Content fullWidth={fullWidth}>
				<h6>{category}</h6>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</Content>
			<Image src={mediaItemUrl} fullWidth={fullWidth} />
		</Card>
	);
};

export default Project;
