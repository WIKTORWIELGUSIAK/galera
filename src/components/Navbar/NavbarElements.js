/** @format */

import styled from "styled-components";

// import element from React Router
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

export const Nav = styled.nav`
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  background-color: #0808a6;
  height: 3em;
  width: 100%;
  color: white;
  z-index: 100;
  padding: 0.4em 0;
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
  color: white;
  text-decoration: none;

  &:after {
    content: "";
    width: 0px;
    height: 0px;
    border-radius: 1.5px;
    background-color: transparent;
    display: block;
    transition: height 0.1s ease-in-out, width 0.3s ease-in-out;
  }
  &:hover {
    &:after {
      width: 100%;
      height: 3px;
      background-color: white;
    }
  }
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
