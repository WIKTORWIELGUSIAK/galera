/** @format */

import React, { useState } from "react";

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
} from "./GaleryElements";
import useFirebase from "../../hooks/useFirebase";

export default function Galery({ categories, setCategories }) {
  const [modalState, setModalState] = useState(false);
  const [images, setImages] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [sliderImgNum, setSliderImgNum] = useState(1);
  useFirebase(setCategories, setImages);

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

  const openModal = (e) => {
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
                  onClick={openModal}
                >
                  <Image
                    src={`https://res.cloudinary.com/galera-kajaki/image/upload/v1647894863/${firstImage.link}.jpg`}
                    alt="img"
                  />
                  <OnHoverImg id={firstImage.category}>
                    {firstImage.category}
                  </OnHoverImg>
                  <Description>{firstImage.category}</Description>
                </SingleImage>
              );
            })
          : null}
      </Images>

      {modalState ? (
        <Modal>
          <ModalBg onClick={(e) => openModal(e)}></ModalBg>
          <ImgSlider>
            <NavBtn
              onClick={(e) => {
                navModal(e);
              }}
              id="prev-img"
            >
              {"<"}
            </NavBtn>
            <Image
              src={`https://res.cloudinary.com/galera-kajaki/image/upload/v1647894863/${sliderImages[sliderImgNum].link}.jpg`}
              alt="img"
            />
            ;
            <NavBtn
              onClick={(e) => {
                navModal(e);
              }}
              id="next-img"
            >
              {">"}
            </NavBtn>
          </ImgSlider>
        </Modal>
      ) : null}
    </Wrapper>
  );
}
