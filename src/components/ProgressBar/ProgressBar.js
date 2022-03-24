/** @format */

import React from "react";
import useStorage from "../../hooks/useStorage";
import {
  ProgressBarVis,
  ProgressBarG,
  ProgressPercent,
} from "./ProgressBarElements";

export default function ProgressBar({ file, setFiles, selectedCategory }) {
  const { progress } = useStorage(file, setFiles, selectedCategory);
  return (
    <div>
      <ProgressBarVis>
        <ProgressPercent>{progress}%</ProgressPercent>
        <ProgressBarG widthProgres={`${progress * 2}px`}></ProgressBarG>
      </ProgressBarVis>
    </div>
  );
}
