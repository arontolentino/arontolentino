import React from "react";
import styled from "styled-components";
import NavHeader from "./NavHeader";
import Footer from "./Footer";

const Wrapper = styled("div")`
  max-width: ${({ fullWidth }) => (!fullWidth ? "1400px" : "none")};
  margin: 0 auto;
  padding: 0 4rem;

  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <NavHeader />

        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
