/** @format */

// /** @format */

import { useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const useFirebase = (setCategories, setImages, deleted, setRoads) => {
  const categoriesCollectionRef = collection(db, "categories");
  const imagesCollectionRef = collection(db, "images");
  useEffect(() => {
    const displayCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(
        data.docs.map((doc) => ({
          category: doc.data().category,
          id: doc.id,
        }))
      );
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
  }, [deleted]);
};

export default useFirebase;
