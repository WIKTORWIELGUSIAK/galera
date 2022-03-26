/** @format */

import React, { useState } from "react";
import {
  Nav,
  Logo,
  Menu,
  StyledLink,
  Hamburger,
  NavElements,
  Close,
} from "./NavbarElements";
// import { GiHamburgerMenu as Hamburger } from "react-icons/gi";

export default function Navbar() {
  // State of display statu menu links
  const [menuDisplay, setMenuDisplay] = useState(false);

  // Function to toggle menu on small screen
  const displayMenu = () => {
    setMenuDisplay(!menuDisplay);
  };

  // Function to close menu on small screen when is clicked link in logo
  const hideMenu = () => {
    setMenuDisplay(false);
  };

  return (
    <Nav>
      <NavElements>
        <StyledLink to="/">
          <Logo onClick={hideMenu}>
            <img src="/images/Logo.png" alt="logo" />
          </Logo>
        </StyledLink>
        <Menu display={menuDisplay ? "flex" : "none"}>
          <StyledLink onClick={displayMenu} to="/src/pages/Galery/Galery.js">
            GALERIA
          </StyledLink>
          <StyledLink onClick={displayMenu} to="/src/pages/Roads/Roads.js">
            TRASY
          </StyledLink>
          <StyledLink onClick={displayMenu} to="/src/pages/Rules/Rules.js">
            ZASADY
          </StyledLink>
          <StyledLink
            onClick={displayMenu}
            to="/src/pages/UploadPage/UploadPage.js"
          >
            DODAJ ZDJĘCIA
          </StyledLink>
          <StyledLink
            onClick={displayMenu}
            to="/src/pages/LoginPage/LoginPage.js"
          >
            LOGIN
          </StyledLink>
        </Menu>
        {menuDisplay ? (
          <Close onClick={displayMenu} size={25} />
        ) : (
          <Hamburger onClick={displayMenu} size={25} />
        )}
      </NavElements>
    </Nav>
  );
}
