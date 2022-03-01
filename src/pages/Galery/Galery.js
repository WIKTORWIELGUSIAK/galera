/** @format */

import React from "react";
import { Wrapper, Image, SingleImage, Description } from "./GaleryElements";

export default function Galery() {
  return (
    <Wrapper>
      <SingleImage>
        <Image src="/images/test.jpg" alt="img" />
        <Description>2015</Description>
      </SingleImage>
      <SingleImage>
        <Image src="/images/test.jpg" alt="img" />
        <Description>2015</Description>
      </SingleImage>
      <SingleImage>
        <Image src="/images/test.jpg" alt="img" />
        <Description>2015</Description>
      </SingleImage>
      <SingleImage>
        <Image src="/images/test.jpg" alt="img" />
        <Description>2015</Description>
      </SingleImage>
      <SingleImage>
        <Image src="/images/test.jpg" alt="img" />
        <Description>2015</Description>
      </SingleImage>
    </Wrapper>
  );
}
