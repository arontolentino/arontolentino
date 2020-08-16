import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../layout/SectionTitle';
import PrimaryBtn from '../layout/PrimaryBtn';

const Section = styled('section')`
	position: relative;
	padding: 0 0 2rem 0;
`;

const NewsletterContainer = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 15rem 0;
`;

const Content = styled('div')`
	flex: 0 0 48%;

	h3 {
		font-size: 6rem;
		margin-bottom: 2rem;
	}

	p {
		font-size: 1.9rem;
	}
`;

const Signup = styled('form')`
	display: flex;
	flex-direction: column;
	flex: 0 0 48%;
	padding: 6rem 4rem;
	border: 0.2rem solid #000;

	input {
		margin-bottom: 3rem;
		padding: 1rem 2rem;
		border: none;
		border-bottom: 0.2rem solid #000;
	}
`;

const BtnContainer = styled('div')`
	margin-top: 3rem;
	display: flex;
	justify-content: center;
`;

const Newsletter = () => {
	return (
		<Section>
			<SectionTitle>
				<h2>Newsletter</h2>
			</SectionTitle>

			<NewsletterContainer>
				<Content>
					<h3>
						Get exclusive access to my web development mistakes and learnings.
					</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
				</Content>
				<Signup>
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Name" />

					<BtnContainer>
						<PrimaryBtn>Sign Up</PrimaryBtn>
					</BtnContainer>
				</Signup>
			</NewsletterContainer>
		</Section>
	);
};

export default Newsletter;
