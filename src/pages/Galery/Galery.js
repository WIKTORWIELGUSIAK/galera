/** @format */

import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

import {
  Wrapper,
  Image,
  SingleImage,
  Description,
  OnHoverImg,
  Modal,
  ImgSlider,
  NavBtn,
  ModalBg,
  Images,
  ImageModal,
  DelBtn,
  Category,
} from "./GaleryElements";
import useFirebase from "../../hooks/useFirebase";

export default function Galery({ categories, setCategories }) {
  const [images, setImages] = useState([]);
  const [deleted, setDeleted] = useState(true);
  const [test, setTest] = useState(true);
  const [modalState, setModalState] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const deleteImg = async (e) => {
    const imgDoc = doc(db, "images", e.target.parentElement.id);
    await deleteDoc(imgDoc);
    setDeleted(!deleted);
  };

  const toggleModal = () => {
    setModalState(!modalState);
  };
  const openModal = (e) => {
    setModalState(true);
    setModalImage(e.target.src);
    console.log(modalImage);
  };

  useFirebase(setCategories, setImages, deleted);
  console.log(test);
  return (
    <Wrapper>
      {categories.map((category) => {
        return (
          <Category key={category.category}>
            <Description onClick={() => setTest(!test)}>
              {category.category}
            </Description>
            <Images cursor={test ? "pointer" : "grab"}>
              {images
                .filter((el) => el.category === category.category)
                .map((image) => {
                  return (
                    <SingleImage id={image.id} key={image.id}>
                      <Image
                        onClick={openModal}
                        src={`https://res.cloudinary.com/galera-kajaki/image/upload/v1647894863/${image.link}.jpg`}
                      />
                      <DelBtn onClick={(e) => deleteImg(e)}>x</DelBtn>
                    </SingleImage>
                  );
                })}
            </Images>
          </Category>
        );
      })}
      {modalState ? (
        <Modal>
          <ModalBg onClick={toggleModal}>
            <ImageModal src={modalImage}></ImageModal>
          </ModalBg>
        </Modal>
      ) : null}
    </Wrapper>
  );
}
