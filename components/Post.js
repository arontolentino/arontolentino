import React from 'react';
import styled from 'styled-components';

const Card = styled('a')`
	flex: 0 0 31.5%;
	margin-bottom: 5rem;

	:hover {
		h2 {
			text-decoration: underline;
			text-decoration-thickness: 4px;
			text-underline-offset: 0.75rem;
		}
	}
`;

const Image = styled('img')`
	max-width: 100%;
	height: auto;
	box-sizing: border-box;
	display: block;
	margin-bottom: 3rem;
`;

const Content = styled('div')`
	h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.9rem;
	}
`;

const Post = () => {
	return (
		<Card href="/#">
			<Image src="https://www.sparks-studio.com/cmsfiles/blog/Wheels/Listing_when_the_wheels.png" />
			<Content>
				<h2>What can charities learn from the peer–to–peer revolution?</h2>
				<p>
					Imagine your brand was hit by a sudden PR crisis, something that could
					derail the whole business. How would you respond? Would you risk it
					all on a rebrand?
				</p>
			</Content>
		</Card>
	);
};

export default Post;
