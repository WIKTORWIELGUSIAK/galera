/** @format */

import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #e5e5e5;
`;

export const Header = styled.header`
  font-size: 32px;
  padding-top: 6em;
  font-weight: 700;

  font-family: "Dancing Script", cursive;
  text-align: center;
`;

export const Content = styled.div`
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 400;
  margin-top: 3em;
  padding: 0 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 0 6rem;
  }
  @media (min-width: 1024px) {
    padding: 0 10rem;
  }
  @media (min-width: 1440px) {
    padding: 0 15rem;
  }
`;

//Animations with keyframes
const animate = keyframes`
/* from is started value of wave */
from {
  background-position-x:0;
}
/* to is last position in each cycle */
to{
  background-position-x:1000px;
}
`;

const animate2 = keyframes`
from {
  background-position-x:0;
}
to{
  background-position-x:-1000px;
}
`;

export const Wave1 = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("/images/wave.png");
  background-size: 1000px 100px;

  animation: ${animate} 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
`;
export const Wave2 = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("/images/wave.png");
  background-size: 1000px 100px;

  animation: ${animate2} 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
`;
export const Wave3 = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("/images/wave.png");
  background-size: 1000px 100px;

  animation: ${animate} 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
`;
export const Wave4 = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("/images/wave.png");
  background-size: 1000px 100px;

  animation: ${animate2} 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 2 0px;
`;
