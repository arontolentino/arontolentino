import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import SectionTitle from '../layout/SectionTitle';

const Section = styled('header')`
	display: flex;
	justify-content: center;
	padding: 8rem 0;

	h3 {
		text-align: center;
		font-size: 6rem;
		font-weight: 700;
		font-family: 'Montserrat', sans-serif;
	}
`;

const Hero = () => {
	return (
		<Section>
			<h3>
				I build full-stack applications with
				<Typewriter
					options={{
						strings: [
							'React.',
							'Node.js.',
							'Express.js.',
							'MongoDB.',
							'WordPress.',
							'GraphQL.',
							'Docker.',
							'Azure.',
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</h3>
			<h3></h3>
		</Section>
	);
};

export default Hero;
