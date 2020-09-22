import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import SectionTitle from "../layout/SectionTitle";

const Section = styled("section")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15rem 0 18rem 0;

  @media only screen and (max-width: 1000px) {
    padding: 10rem 0 13rem 0;
  } ;
`;

const Content = styled("div")`
  margin-bottom: 3rem;
  text-align: center;

  h3 {
    font-size: 8rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;

    @media only screen and (max-width: 600px) {
      font-size: 6rem;
    }

    @media only screen and (max-width: 500px) {
      font-size: 5rem;
    }

    @media only screen and (max-width: 370px) {
      font-size: 4rem;
    }
  }
`;

const Arrow = styled("a")`
  img {
    width: 5rem;
    display: block;
    margin: 0 auto;
    animation: bounce 2s infinite;

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-15px);
      }
      60% {
        transform: translateY(15px);
      }
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <h3>
          I build web applications with
          <Typewriter
            options={{
              strings: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "WordPress",
                "GraphQL",
                "Docker",
                "Azure",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </Content>

      <Arrow href="#work">
        <img src="/arrow-down.svg" alt="" />
      </Arrow>
    </Section>
  );
};

export default Hero;
