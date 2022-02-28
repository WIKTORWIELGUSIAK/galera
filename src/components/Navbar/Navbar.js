/** @format */

import React from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink } from "./NavbarElements";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.png" alt="logo" />
      </Logo>
      <Menu>
        <MenuLink href="">GALERIA</MenuLink>
        <MenuLink href="">TRASY</MenuLink>
        <MenuLink href="">ZASADY</MenuLink>
      </Menu>
      {/* <Hamburger>
        <GiHamburgerMenu size={25} />
      </Hamburger> */}
    </Nav>
  );
}
