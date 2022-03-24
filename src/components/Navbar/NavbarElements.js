/** @format */

import styled from "styled-components";

// import element from React Router
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  background-color: #0808a6;
  color: white;
  justify-content: space-between;
  padding: 8px 14px;
  height: 40px;
  padding: 8px 28px;

  @media (min-width: 1440px) {
    padding: 8px 42px;
  }
`;

export const Logo = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;

//Styling existed element imported from React Router
export const StyledLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
`;
