/** @format */

// /** @format */

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";

const useStorage = (file, setFiles, selectedCategory) => {
  const [progress, setProgress] = useState(0);

  const imagesCollectionRef = collection(db, "images");
  const uploadData = async (res) => {
    await addDoc(imagesCollectionRef, {
      link: JSON.stringify(res.data.public_id),
      id: JSON.stringify(res.data.asset_id),
      category: selectedCategory,
    });
  };

  const categoryError = () => {
    alert("chooseCategory");
    setFiles([]);
  };

  const formData = new FormData();

  formData.append("folder", "galera");
  formData.append("upload_preset", "m0qiibuk");
  formData.append("tags", selectedCategory);
  formData.append("file", file);

  const config = {
    onUploadProgress: (progressEvent) =>
      setProgress(
        Math.floor((progressEvent.loaded / progressEvent.total) * 100)
      ),
  };
  useEffect(() => {
    selectedCategory != "choose"
      ? axios
          .post(
            "https://api.cloudinary.com/v1_1/galera-kajaki/image/upload",
            formData,
            config
          )
          .then((res) => uploadData(res))
      : categoryError();
  }, []);

  return { progress };
};

export default useStorage;
