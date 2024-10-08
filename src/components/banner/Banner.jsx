import Link from "next/link";
import React from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);
function Banner() {
  const bannerSliders = {
    slidesPerView: 1,
    speed: 1200,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination-g",
    },
  };
  return (
    <div className="banner-section2">
      <div className="banner-vector">
        <img
          className="pagination-bg"
          src="assets/images/icon/h2-slider-paginatin-bg.svg"
          alt=""
        />
        <img
          className="rect-shape1"
          src="assets/images/icon/h2-banner-rect-shape.svg"
          alt=""
        />
        <img
          className="rect-shape2"
          src="assets/images/icon/h2-banner-rect-shape.svg"
          alt=""
        />
        <img
          className="circle"
          src="assets/images/icon/h2-banner-circle.svg"
          alt=""
        />
      </div>
      <Swiper {...bannerSliders} className="swiper banner2-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="banner-content">
                <span>
                  <div className="flex">
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  <h1 className="text-red-400"> Welcome to Nepal</h1>
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  </div>
                  Welcome to 4Dreams Nepali & Indian Cuisine
                  
                </span>
                <h1>Discover your perfect blend of authentic &amp; flavorful foods!</h1>
                <Link legacyBehavior href="/menu1">
                  <a className="primary-btn5 btn-md2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Order Now
                  </a>
                </Link>
              </div>
              <div className="banner-right">
                <img
                  className="img-fluid h2-banner-img1"
                  src="assets/images/group/Group1.png"
                  alt="h2-banner-img1"
                />
                <img
                  className="img-fluid h2-banner-img3"
                  src="assets/images/group/Group1.png"
                  alt="h2-banner-img3"
                />
                <img
                  className="img-fluid h2-banner-img2"
                  src="assets/images/group/Group1.png"
                  alt="h2-banner-img2"
                />
                <img
                  className="img-fluid h2-banner-img4"
                  src="assets/images/group/Group1.png"
                  alt="h2-banner-img4"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="banner-content">
                <span >
                  <div className="flex">
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Welcome to 4Dreams Nepali & Indian Cuisine
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />

                  </div>
                  
                </span>
                <h1>Discover your perfect blend of authentic &amp; flavorful foods!</h1>
                <Link legacyBehavior href="/about">
                  <a className="primary-btn5 btn-md2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Order Now
                  </a>
                </Link>
              </div>
              <div className="banner-right">
                <img
                  className="img-fluid h2-banner-img1"
                  src="assets/images/group/1.png"
                  alt="h2-banner-img1"
                />
                <img
                  className="img-fluid h2-banner-img3"
                  src="assets/images/group/2.png"
                  alt="h2-banner-img3"
                />
                <img
                  className="img-fluid h2-banner-img2"
                  src="assets/images/group/3.png"
                  alt="h2-banner-img2"
                />
                <img
                  className="img-fluid h2-banner-img4"
                  src="assets/images/group/1.png"
                  alt="h2-banner-img4"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="banner-content">
                <span>
                  <div className="flex">
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Welcome to 4Dreams Nepali & Indian Cuisine
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  </div>
                </span>
                <h1>Discover your perfect blend of authentic &amp; flavorful foods!</h1>
                <Link legacyBehavior href="/menu1">
                  <a className="primary-btn5 btn-md2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Order Now
                  </a>
                </Link>
              </div>
              <div className="banner-right">
              <img
                  className="img-fluid h2-banner-img1"
                  src="assets/images/group/Group1.png"
                  alt="h2-banner-img1"
                />
                <img
                  className="img-fluid h2-banner-img3"
                  src="assets/images/group/Group1.png"
                  alt="h2-banner-img3"
                />
                <img
                  className="img-fluid h2-banner-img2"
                  src="assets/images/group/Group1.png"
                  alt="h2-banner-img2"
                />
                <img
                  className="img-fluid h2-banner-img4"
                  src="assets/images/group/Group1.png"
                  alt="h2-banner-img4"
                />

              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination-g" />
      </Swiper>
    </div>
  );
}

export default Banner;
