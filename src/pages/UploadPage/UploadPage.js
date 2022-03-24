/** @format */

import React, { useState } from "react";
import Categories from "../../components/Categories/Categories";
import UploadCategory from "../../components/UploadCategory/UploadCategory";
import UploadFiles from "../../components/UploadFiles/UploadFiles";
import { Wraper, UploadForm, Title } from "./UploadPageElemts";

export default function UploadPage({ categories, setCategories }) {
  // Const states
  const [files, setFiles] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("choose");
  const [inputText, setInputText] = useState("");
  const [displayInput, setDisplayInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  return (
    <Wraper>
      <Title>Dodaj zdjęcia do wybranego spływu</Title>

      <Categories
        categories={categories}
        setCategories={setCategories}
      ></Categories>
      <UploadForm>
        <UploadCategory
          inputText={inputText}
          setInputText={setInputText}
          displayInput={displayInput}
          setDisplayInput={setDisplayInput}
          categories={categories}
          setCategories={setCategories}
          showInput={showInput}
          setShowInput={setShowInput}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></UploadCategory>
        <UploadFiles
          files={files}
          setFiles={setFiles}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></UploadFiles>
      </UploadForm>
    </Wraper>
  );
}
