/** @format */

import styled from "styled-components";
import { IoTrash } from "react-icons/io5";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4em;
`;

export const Category = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  font-size: 1.5em;
`;

export const Description = styled.div`
  text-align: center;
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

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const DelBtnHolder = styled.div`
  width: 15%;
  max-width: 1em;
  height: 15%;
  max-height: 1em;
  z-index: 97;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.12);
`;
export const DelBtnBg = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 98;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Trash = styled(IoTrash)`
  position: relative;
  top: 0;
  right: 0;
  padding: 2px;
  z-index: 97;
  width: 100%;
  height: 100%;
  color: whitesmoke;
  border: none;
  cursor: pointer;
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
  z-index: 99;
`;
export const ModalBg = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #0808a6ab;
`;

export const ImageModal = styled.img`
  max-height: 94%;
  max-width: 80%;
  margin: 3% 10%;
  object-fit: contain;
  z-index: 99;
`;
