/** @format */

import React, {
  useCallback,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { db, auth } from "../../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import { AppContext } from "../../App";

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

export const GaleryContext = createContext();

export default function Galery() {
  const app = useContext(AppContext);

  const [images, setImages] = useState([]);
  const [deleted, setDeleted] = useState(true);
  const [modalState, setModalState] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const galeryValue = {
    images: images,
    setImages: setImages,
    deleted: deleted,
    setDeleted: setDeleted,
    modalState: modalState,
    setModalState: setModalState,
    modalImage: modalImage,
    setModalImage: setModalImage,
  };

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

  useFirebase(app.setCategories, setImages, deleted);

  return (
    <GaleryContext.Provider value={galeryValue}>
      <Wrapper>
        {app.categories.map((category) => {
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
                        {app.user !== null ? (
                          <DelBtnHolder>
                            <DelBtnBg
                              id={image.id}
                              onClick={(e) => deleteImg(e)}
                            ></DelBtnBg>
                            <Trash />
                          </DelBtnHolder>
                        ) : null}
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
    </GaleryContext.Provider>
  );
}
