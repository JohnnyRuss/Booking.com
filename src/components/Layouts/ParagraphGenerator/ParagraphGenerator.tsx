import React from "react";
import { nanoid } from "@reduxjs/toolkit";

interface ParagraphGeneratorType {
  data: string;
}

const ParagraphGenerator: React.FC<ParagraphGeneratorType> = ({ data }) => {
  return (
    <>
      {data.split("</br>").map((paragraph) => (
        <p key={nanoid()}>{paragraph}</p>
      ))}
    </>
  );
};

export default ParagraphGenerator;
