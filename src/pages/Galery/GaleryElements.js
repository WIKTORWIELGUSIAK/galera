/** @format */

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4em;
`;
export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 1rem;
  cursor: ${(props) => props.cursor};

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

  &:hover {
    transform: scale(1.1);
  }
`;
export const Description = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;
export const ImageModal = styled.img`
  max-height: 94%;
  width: 80%;
  margin: 3% 10%;
  object-fit: contain;
`;

export const Modal = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 2.5em;
  left: 0;
  width: 100%;
  height: calc(100% - 2.5em);
  z-index: 102;
`;
export const ImgSlider = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 75%;
  height: auto;

  /* padding-top: 2.7em; */
  margin-top: 2.7em;
  /* z-index: 200; */
  @media (min-height: 768px) {
    max-height: auto;
  }
`;
export const NavBtn = styled.button`
  z-index: 200;
`;
export const ModalBg = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #0808a6ab;
`;

export const DelBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 101;
  background-color: inherit;
  border: none;
  font-size: 30px;
  font-weight: bold;
`;

export const Category = styled.section`
  display: flex;
  flex-direction: column;
`;
