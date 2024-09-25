import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
import newItemData from "../../data/newItem.json";

function NewItem2() {
  const newItemslider = {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".next-btn-3",
      prevEl: ".prev-btn-3",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div>
      <div className="h2-reguler-item mb-120">
        <div className="container">
          <div className="row d-flex justify-content-center mb-40">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <div className="flex justify-center items-center space-x-2 ">
                  <img
                    className="left-vec w-6 h-6"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  <span className="text-center text-lg text-gold font-medium">
                    Our New Item
                  </span>
                  <img
                    className="right-vec w-6 h-6"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </div>
                <h2>Restho New Item List</h2>
                <p>
                  Various versions have evolved over the years, sometimes on
                  purpose.
                </p>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <Swiper {...newItemslider} className="swiper h2-reguler-items-slider">
              <div className="swiper-wrapper">
                {newItemData.newItems.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="reguler-items-wrap">
                      <div className="item-img">
                        <img
                          className="img-fluid"
                          src={item.image}
                          alt={item.slideCategoryTitle}
                        />
                        <div className="price">
                          <h5>{item.price}</h5>
                        </div>
                      </div>
                      <div className="reguler-items-content">
                        <h3>
                          <Link href="/shop-details">{item.slideTitle}</Link>
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="slider-btn">
              <div className="prev-btn-3" style={{ cursor: "pointer" }}>
                <i className="bi bi-arrow-left-short" />
              </div>
              <div className="next-btn-3" style={{ cursor: "pointer" }}>
                <i className="bi bi-arrow-right-short" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewItem2;
