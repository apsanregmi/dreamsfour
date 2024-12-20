import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import gallaryData from "../../data/gallery2.json";

import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Gallary2() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });

  const gallarySider = {
    slidesPerView: "auto",
    spaceBetween: 37,
    loop: true,
    speed: 1500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 35,
        centeredSlides: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 35,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true,
      },
      1400: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 5,
        centeredSlides: true,
      },
    },
  };

  return (
    <div className="h2-special-gallery mb-120">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <div className="flex justify-center items-center space-x-4">
                <img
                  className="left-vec w-6 h-6"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                <span className="text-center text-lg text-gold font-medium">
                  Gallery Store
                </span>
                <img
                  className="right-vec w-6 h-6"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </div>
              <h2>Our Special Gallery</h2>
            </div>
          </div>
        </div>
      </div>

      <Swiper {...gallarySider} className="swiper h2-gallery">
        <div className="swiper-wrapper">
          {gallaryData.map((data, index) => {
            const { id, imageSmalll } = data;
            return (
              <SwiperSlide key={id} className="swiper-slide">
                <div className="gallery-img-wrapper">
                  <div className="gallery-img">
                    <img
                      className="img-fluid"
                      src={imageSmalll}
                      alt=""
                      style={{
                        objectFit: "cover", // Ensures the image fits properly
                        width: "100%", // Full width of its container
                        height: "100%", // Full height of its container
                      }}
                    />
                    <div className="overlay">
                      <img
                        src="assets/images/icon/Zoom."
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: index })
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={gallaryData.map(function (elem) {
          return { src: elem.imageBig };
        })}
      />
    </div>
  );
}

export default Gallary2;