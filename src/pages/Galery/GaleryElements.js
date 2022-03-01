/** @format */

import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

export const SingleImage = styled.div``;
export const Description = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;
