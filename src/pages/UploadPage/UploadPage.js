/** @format */

import React, { useState, useContext } from "react";
import Categories from "../../components/Categories/Categories";
import UploadCategory from "../../components/UploadCategory/UploadCategory";
import UploadFiles from "../../components/UploadFiles/UploadFiles";
import { Wraper, UploadForm, Title } from "./UploadPageElemts";
import App, { AppContext } from "../../App";

export default function UploadPage() {
  // Const states
  const app = useContext(AppContext);
  const [files, setFiles] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("choose");
  const [inputText, setInputText] = useState("");
  const [displayInput, setDisplayInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  return (
    <Wraper>
      <Title>Dodaj zdjęcia do wybranego spływu</Title>

      <Categories
        categories={app.categories}
        setCategories={app.setCategories}
      ></Categories>
      <UploadForm>
        <UploadCategory
          inputText={inputText}
          setInputText={setInputText}
          displayInput={displayInput}
          setDisplayInput={setDisplayInput}
          categories={app.categories}
          setCategories={app.setCategories}
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
