/** @format */

import React, { useEffect } from "react";
import { Category, Wraper, Title, RemoveBtn } from "./CategoriesElement";
import { db } from "../../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export default function Categories({ categories, setCategories }) {
  const categoriesCollectionRef = collection(db, "categories");

  const removeCategory = async (id) => {
    const categoryDoc = doc(db, "categories", id);
    console.log(categoryDoc);
    await deleteDoc(categoryDoc, id);
    // refreshCategories();
  };
  useEffect(() => {
    const refreshCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      console.log(data.docs);
      setCategories(
        data.docs.map((doc) => ({
          category: doc.data().category,
          id: doc.id,
        }))
      );
    };
    refreshCategories();
  }, []);
  return (
    <Wraper>
      <Title>Kategorie spływów</Title>
      {categories.map((category) => {
        return (
          <Category key={Math.random()}>
            {category.category}
            <RemoveBtn
              onClick={() => {
                removeCategory(category.id);
              }}
            >
              -
            </RemoveBtn>
          </Category>
        );
      })}
    </Wraper>
  );
}
