/** @format */

// /** @format */

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import axios from "axios";

const useFirebase = (setCategories, setImages) => {
  const categoriesCollectionRef = collection(db, "categories");
  const imagesCollectionRef = collection(db, "images");
  const data = getDocs(categoriesCollectionRef);
  useEffect(() => {
    const displayCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(
        data.docs.map((doc) => ({
          category: doc.data().category,
          id: doc.id,
        }))
      );
      console.log("może");
    };
    displayCategories();
  }, []);

  useEffect(() => {
    const displayImages = async () => {
      const data = await getDocs(imagesCollectionRef);
      setImages(
        data.docs.map((doc) => ({
          id: doc.id,
          link: JSON.parse(doc.data().link),
          category: doc.data().category,
        }))
      );
    };
    displayImages();
  }, []);
};

export default useFirebase;
