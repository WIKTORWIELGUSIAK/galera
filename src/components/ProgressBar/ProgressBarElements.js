/** @format */

import styled from "styled-components";

export const ProgressBarVis = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  height: 50px;
  background-color: gray;
`;
export const ProgressBarG = styled.div`
  position: absolute;
  display: flex;
  width: ${(props) => props.widthProgres};
  height: 50px;
  background-color: green;
`;
export const ProgressPercent = styled.div`
  position: absolute;
  display: flex;
  /* justify-content: center; */
  padding-left: 20px;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
