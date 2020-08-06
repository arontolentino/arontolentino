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
	opacity: 0;
	transition: all 0.5s cubic-bezier(0.25, 1, 0.33, 1);

	:hover {
		opacity: 0.7;
	}
`;

const Card = styled('a')`
	position: relative;
	flex: 0 0 48.5%;
	padding-top: 6rem;
	background: #39f;
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
	min-height: 275px;

	h6 {
		font-size: 1.5rem;
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

const Project = () => {
	return (
		<Card href="#">
			<Overlay>
				<OverlayBG />
				<p>View Project</p>
			</Overlay>
			<Content>
				<h6>TMS Product</h6>
				<h2>VirtualPostMail</h2>
				<p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
			</Content>
			<Image src="https://tms-outsource.com/site/assets/files/1910/img-header-homepage_cf090fe02d8bd88b0d8d6fe9d0abe110_stuff_copy_mask.png" />
		</Card>
	);
};

export default Project;
