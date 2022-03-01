/** @format */

import React from "react";
import {
  Nav,
  Logo,
  Hamburger,
  Menu,
  MenuLink,
  StyledLink,
} from "./NavbarElements";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <Nav>
      <StyledLink to="/src/pages/MainPage/MainPage.js">
        <Logo>
          <img src="/images/Logo.png" alt="logo" />
        </Logo>
      </StyledLink>
      <Menu>
        <StyledLink to="/src/pages/Galery/Galery.js">GALERIA</StyledLink>
        <StyledLink to="/src/pages/Roads/Roads.js">TRASY</StyledLink>
        <StyledLink to="/src/pages/Rules/Rules.js">ZASADY</StyledLink>
      </Menu>
    </Nav>
  );
}
