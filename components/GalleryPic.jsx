import React from "react";
import { useState } from "react";



const GalleryPic = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  // const g = product?.data?.[0]?.attributes;


  return (
    <div className="bg-gradient-to-r pb-9 from-black via-purple-900 to-black">
      {openModal && (
        <div className="sliderWrap bg-white">
          <button className="btnPrev" onClick={prevSlide}>
            PREV
          </button>
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="abc" />
            <div className="justify-between flex">
              <button className="btnClose" onClick={handleCloseModal}>
                Close
              </button>
              <a
                className="downloadbtn"
                href={galleryImages[slideNumber].img}
                download
              >
                Download
              </a>
            </div>
          </div>
          <button className="btnNext" onClick={nextSlide}>
            NEXT
          </button>
        </div>
      )}

      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={slide.img}
                  alt="a"
                  onClick={() => handleOpenModal(index)}
                />
                <a className='downloadbtn'href={slide.img} download>Download</a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GalleryPic;
