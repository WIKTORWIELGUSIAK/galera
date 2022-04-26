/** @format */

import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import {
  Nav,
  Logo,
  Menu,
  StyledLink,
  Hamburger,
  NavElements,
  Close,
} from "./NavbarElements";

export default function Navbar() {
  // State of display statu menu links
  const [menuDisplay, setMenuDisplay] = useState(false);
  const app = useContext(AppContext);

  // Function to toggle menu on small screen
  const displayMenu = (e) => {
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
          <StyledLink
            onClick={(e) => {
              displayMenu(e);
            }}
            to="/src/pages/Galery/Galery.js"
          >
            GALERIA
          </StyledLink>
          <StyledLink onClick={displayMenu} to="/src/pages/Roads/Roads.js">
            TRASY
          </StyledLink>
          <StyledLink onClick={displayMenu} to="/src/pages/Rules/Rules.js">
            ZASADY
          </StyledLink>
          {app.user !== null ? (
            <StyledLink
              onClick={displayMenu}
              to="/src/pages/UploadPage/UploadPage.js"
            >
              DODAJ ZDJĘCIA
            </StyledLink>
          ) : null}
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
