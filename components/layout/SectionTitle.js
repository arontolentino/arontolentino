import React from "react";
import styled from "styled-components";

const Title = styled("div")`
  h1,
  h2 {
    padding: 0 1rem;
    font-size: 1.9rem;
    font-weight: 900;
    width: 24rem;
    text-align: right;
    color: #fff;
    background: #000;
    text-transform: uppercase;

    @media only screen and (max-width: 500px) {
      font-size: 1.8rem;
      width: 21rem;
    }
  }
`;

const SectionTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default SectionTitle;
