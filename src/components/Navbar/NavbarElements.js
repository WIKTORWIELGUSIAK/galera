/** @format */

import styled from "styled-components";

// import element from React Router
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  background-color: #0808a6;
  height: 2.5em;
  width: 100%;
  color: white;
  z-index: 200;
  padding: 0.2em 0;
`;

export const NavElements = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: flex-end;
`;

export const Logo = styled.div`
  display: flex;
  position: absolute;
  left: 24px;
`;

export const Menu = styled.div`
  background-color: #0808a6;
  display: ${(props) => props.display};
  flex-direction: column;
  position: absolute;
  right: 0;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  padding: 1em 1em;
  top: 2.5em;
  z-index: 100;
  height: 50vh;
  @media (min-width: 768px) {
    flex-direction: row;
    position: relative;
    display: flex;
    height: auto;
    top: 0px;
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1440px) {
    width: 55%;
  }
  @media (min-width: 2056px) {
    width: 40%;
  }
`;

//Styling existed element imported from React Router
export const StyledLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
`;

//Styling existed element imported from React Icons
export const Hamburger = styled(GiHamburgerMenu)`
  position: absolute;
  right: 24px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: ${(props) => props.display};
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Close = styled(IoCloseOutline)`
  position: absolute;
  right: 24px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: ${(props) => props.display};
  @media (min-width: 768px) {
    display: none;
  }
`;
