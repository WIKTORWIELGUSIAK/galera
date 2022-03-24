/** @format */

import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  Select,
  Option,
  Form,
  Wraper,
  Title,
  Icon,
  Input,
  Button,
} from "./UploadCategoryElements";

export default function UploadCategory({
  inputText,
  setInputText,
  displayInput,
  setDisplayInput,
  selectedCategory,
  setSelectedCategory,
  showInput,
  setShowInput,
  setCategories,
  categories,
}) {
  const categoriesCollectionRef = collection(db, "categories");

  const uploadData = async () => {
    await addDoc(categoriesCollectionRef, {
      category: inputText,
    });
    setDisplayInput("");
  };

  const openInput = () => {
    setShowInput(!showInput);
  };

  const createCategory = (e) => {
    setInputText(e.target.value);
    setDisplayInput(e.target.value);
  };

  useEffect(() => {
    const getCategory = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(
        data.docs.map((doc) => ({
          category: doc.data().category,
          id: doc.id,
        }))
      );
    };
    getCategory();
    console.log("if bug ");
  }, [displayInput === ""]);

  return (
    <Wraper>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <Option disabled={true} value={"choose"}>
          Wybierz kategorie
        </Option>
        {categories.map((category) => {
          return <Option key={Math.random()}>{category.category}</Option>;
        })}
      </Select>
      <Icon onClick={openInput}>+</Icon>
      <Form display={showInput ? "flex" : "none"}>
        <Input
          type="text"
          name="category"
          id=""
          value={displayInput}
          onChange={(e) => createCategory(e)}
        />
        <Button onClick={uploadData}>Dodaj</Button>
      </Form>
    </Wraper>
  );
}
