import Link from "next/link";
import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import menuData from "../../data/menu.json";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Product1() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch or import data from the menu.json file
    setMenuItems(menuData.menu); // Assuming menuData has a property "menu" with an array
  }, []);

  const slider = {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 1,
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
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="h2-product-area pt-72 pb-72 mt-10 mb-10">
      
      <Swiper {...slider} className="swiper h2-product-slider">
        <div className="swiper-wrapper">
          {menuItems.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="product-wrap">
                <div className="product-img" style={{ textAlign: "center" }}>
                  <img
                    className="img-fluid"
                    src={item.image}
                    alt={item.slideTitle}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%", 
                      objectFit: "cover", 
                    }}
                  />
                </div>
                <div className="product-content" style={{ textAlign: "left", marginTop: "15px" }}>
                  <h4>
                    
                    {/* Pass the item ID via query params */}
                    <Link legacyBehavior href={{ pathname: "/menu1", query: { recommendedItemId: item.id } }}>
                      <a>{item.slideCategoryTitle}</a>
                    </Link>
                  </h4>
                  <p>{item.description}</p>
                  {/* <p>{item.price}</p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Product1;
