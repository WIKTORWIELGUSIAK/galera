/** @format */

import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background-color: #0808a6;
  color: white;
  justify-content: space-between;
  padding: 1vh 14px;
  height: 5vh;
  @media (min-width: 768px) {
    padding: 1vh 28px;
  }
  @media (min-width: 1440px) {
    padding: 1vh 42px;
  }
`;
export const Logo = styled.image`
  display: flex;
`;
// export const Hamburger = styled.div`
//   display: none;
//   align-items: center;
//   justify-content: flex-end;
//   padding-right: 14px;
//   width: 100%;
//   @media (min-width: 768px) {
//     display: none;
//   }
// `;
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
export const MenuLink = styled.a`
  display: flex;
  color: white;
  text-decoration: none;
`;
