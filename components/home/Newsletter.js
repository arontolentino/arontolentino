import React from "react";
import styled from "styled-components";
import SectionTitle from "../layout/SectionTitle";
import PrimaryBtn from "../layout/PrimaryBtn";

const Section = styled("section")`
  position: relative;
  padding: 0 0 2rem 0;
`;

const NewsletterContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;
`;

const Content = styled("div")`
  text-align: center;

  h3 {
    font-size: 6rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.9rem;
  }
`;

const Signup = styled("form")`
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

const BtnContainer = styled("div")`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const Newsletter = () => {
  return (
    <Section>
      <SectionTitle>
        <h2>Contact</h2>
      </SectionTitle>

      <NewsletterContainer>
        <Content>
          <h3>Interested in working together?</h3>
          <p>
            Have an exciting project where you need some help? Connect with my
            on one of the platforms below.
          </p>
        </Content>
      </NewsletterContainer>
    </Section>
  );
};

export default Newsletter;
