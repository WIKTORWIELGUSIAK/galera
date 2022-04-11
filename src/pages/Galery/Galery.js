/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

import {
  Wrapper,
  Image,
  SingleImage,
  Description,
  Modal,
  ModalBg,
  Images,
  ImageModal,
  Category,
  Trash,
  DelBtnHolder,
  DelBtnBg,
} from "./GaleryElements";
import useFirebase from "../../hooks/useFirebase";

export default function Galery({ categories, setCategories }) {
  const [images, setImages] = useState([]);
  const [deleted, setDeleted] = useState(true);
  const [modalState, setModalState] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const deleteImg = async (e) => {
    const imgDoc = doc(db, "images", e.target.id);
    console.log(e.target.id);
    await deleteDoc(imgDoc);
    setDeleted(!deleted);
  };

  const openModal = (e) => {
    setModalState(true);
    setModalImage(e.target.src);
  };
  const closeModal = () => {
    setModalState(false);
    setModalImage("");
  };
  const keyPress = useCallback((e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
  }, [keyPress]);

  useFirebase(setCategories, setImages, deleted);

  return (
    <Wrapper>
      {categories.map((category) => {
        return (
          <Category key={category.category}>
            <Description>{category.category}</Description>
            <Images>
              {images
                .filter((el) => el.category === category.category)
                .map((image) => {
                  return (
                    <SingleImage id={image.id} key={image.id}>
                      <Image
                        onClick={openModal}
                        src={`https://res.cloudinary.com/galera-kajaki/image/upload/v1647894863/${image.link}.jpg`}
                      />
                      <DelBtnHolder>
                        <DelBtnBg
                          id={image.id}
                          onClick={(e) => deleteImg(e)}
                        ></DelBtnBg>
                        <Trash />
                      </DelBtnHolder>
                    </SingleImage>
                  );
                })}
            </Images>
          </Category>
        );
      })}
      {modalState ? (
        <Modal>
          <ModalBg onClick={closeModal}></ModalBg>
          <ImageModal src={modalImage} />
        </Modal>
      ) : null}
    </Wrapper>
  );
}
