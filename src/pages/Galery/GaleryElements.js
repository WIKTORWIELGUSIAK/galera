/** @format */

import styled from "styled-components";

export const OnHoverImg = styled.div`
  background-color: #0808a665;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 1rem;
  @media (min-width: 375px) {
    padding: 1rem 2rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 2056px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 2rem 3rem;
    gap: 2rem;
  } ;
`;

export const SingleImage = styled.div`
  position: relative;
  &:hover ${OnHoverImg} {
    opacity: 1;
  }
`;
export const Description = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  z-index: 100;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const Modal = styled.div`
  position: absolute;
  background-color: #0808a6ab;
  top: 56px;
  left: 0;
  width: 100vw;
  height: 100%;
  /* z-index: 100; */
`;
export const ImgSlider = styled.div`
  /* position: absolute; */
  display: flex;
  height: 200px;
  width: 200px;
  background-color: black;
  z-index: 100;
`;
export const NavBtn = styled.button`
  z-index: 100;
`;
export const ModalBg = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;
