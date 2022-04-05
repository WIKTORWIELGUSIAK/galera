/** @format */

import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
// import cloudinary from "cloudinary/lib/cloudinary";

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
} from "./GaleryElements";
import useFirebase from "../../hooks/useFirebase";

export default function Galery({ categories, setCategories }) {
  const imagesCollectionRef = collection(db, "categories");

  const [modalState, setModalState] = useState(false);
  const [images, setImages] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [sliderImgNum, setSliderImgNum] = useState(0);
  const [nothing, setNothing] = useState(true);

  const imDoingNothing = () => {
    setNothing(!nothing);
    console.log(nothing);
  };
  // cloudinary.config = {
  //   cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  //   api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  //   api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
  // };

  useFirebase(setCategories, setImages, images, sliderImages);
  const navModal = (e) => {
    if (e.target.id === "prev-img") {
      if (sliderImgNum === 0) {
        setSliderImgNum(sliderImages.length - 1);
      } else {
        setSliderImgNum(sliderImgNum - 1);
      }
    } else {
      if (sliderImgNum === sliderImages.length - 1) {
        setSliderImgNum(0);
      } else {
        setSliderImgNum(sliderImgNum + 1);
      }
    }
  };
  // console.log(sliderImgNum);
  // console.log(sliderImages[sliderImgNum].id);

  const deleteThisDoc = async () => {
    const imgDoc = doc(db, "images", sliderImages[sliderImgNum].id);
    await deleteDoc(imgDoc);
    // setSliderImages(sliderImages.splice(sliderImgNum, 1));
    imDoingNothing();
    console.log(sliderImages);
    console.log("i deleted from docs");
  };
  const deleteImg = () => {
    if (sliderImages.length > 1) {
      deleteThisDoc();
      console.log("deleted");
    }
    // else {
    //   console.log(sliderImages.length);
    //   console.log("i cant delete");
    // }
    // const id = sliderImages[sliderImgNum].id;
    // console.log(id);
    // if (sliderImages.length > 1) {
    //   const imgDoc = doc(db, "images", id);
    //   await deleteDoc(imgDoc);
    //   console.log(sliderImgNum);
    //   if (sliderImgNum < sliderImages.length) {
    //     sliderImages.splice(sliderImgNum, 1);
    //     console.log(sliderImages.length);
    //     console.log("+1");
    //   } else {
    //     setSliderImgNum(0);
    //     console.log("0");
    //   }
    // } else {
    //   console.log("you cant");
    // }
  };
  useEffect(() => {
    const refreshImgModal = () => {
      if (sliderImages.length !== 0) {
        console.log(sliderImages[0]);
        console.log(sliderImgNum);
        console.log(sliderImages[0]);
        setSliderImages(
          images.filter((el) => el.category === sliderImages[0].category)
        );
        console.log("KURWAAAAA");
      }
    };
    refreshImgModal();
  }, [nothing]);

  const setImagesToModal = (e) => {
    setSliderImages(images.filter((el) => el.category === e.target.id));
    setModalState(!modalState);
  };

  return (
    <Wrapper>
      <Images>
        {images.length !== 0
          ? categories.map((category) => {
              const firstImage = images.find(
                (el) => el.category === category.category
              );
              return (
                <SingleImage
                  id={firstImage.category}
                  key={firstImage.id}
                  onClick={setImagesToModal}
                >
                  <Image
                    src={`https://res.cloudinary.com/galera-kajaki/image/upload/v1647894863/${firstImage.link}.jpg`}
                    alt="img"
                  />
                  {!modalState ? (
                    <OnHoverImg id={firstImage.category}>
                      {firstImage.category}
                    </OnHoverImg>
                  ) : null}
                  <Description>{firstImage.category}</Description>
                </SingleImage>
              );
            })
          : null}
      </Images>

      {modalState ? (
        <Modal>
          <ModalBg onClick={setImagesToModal}></ModalBg>
          <ImgSlider>
            <NavBtn
              onClick={(e) => {
                navModal(e);
              }}
              id="prev-img"
            >
              {"<"}
            </NavBtn>
            {
              <ImageModal
                src={`https://res.cloudinary.com/galera-kajaki/image/upload/v1647894863/${sliderImages[sliderImgNum].link}.jpg`}
                alt="img"
              />
            }
            ;
            <NavBtn
              onClick={(e) => {
                navModal(e);
              }}
              id="next-img"
            >
              {">"}
            </NavBtn>
            <DelBtn onClick={() => deleteImg()}>x</DelBtn>
          </ImgSlider>
        </Modal>
      ) : null}
    </Wrapper>
  );
}
