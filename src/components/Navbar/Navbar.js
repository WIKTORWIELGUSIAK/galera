/** @format */

import React from "react";
import { Nav, Logo, Menu, StyledLink } from "./NavbarElements";

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
        <StyledLink to="/src/pages/UploadPage/UploadPage.js">
          Formularz dodawania zdjęć
        </StyledLink>
        <StyledLink to="/src/pages/LoginPage/LoginPage.js">Login</StyledLink>
      </Menu>
    </Nav>
  );
}
