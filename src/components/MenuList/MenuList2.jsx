import Link from "next/link";
import React, { useState } from "react";
import menuList2Data from "../../data/menu.json";

function MenuList2() {
  const [showMore, setShowMore] = useState(6);

  const handleShowmore = () => {
    setShowMore(showMore + showMore);
  };

  return (
    <div className="home2-food-items mb-120">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center mb-40 g-3">
          <div className="col-lg-8">
            <div className="section-title">
              <div className="flex space-x-4">
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                <div className="text-yellow-500 text-2xl">Menu List</div>
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </div>
              <h2>Find Your Food Item</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end mb-sm-25">
            <div
              className="primary-btn5 btn-md2"
              onClick={() => handleShowmore()}
              style={
                menuList2Data.menu.length > showMore
                  ? { color: "#000", cursor: "pointer" }
                  : {
                      color: "#000",
                      background: "dark",
                      cursor: "no-drop",
                      opacity: ".5",
                    }
              }
              disabled={menuList2Data.menu.length > showMore ? false : true}
            >
              <i className="bi bi-arrow-up-right-circle" />
              {menuList2Data.menu.length > showMore ? "View More" : "Complete"}
            </div>
          </div>
        </div>
        <div className="row g-4">
          {menuList2Data.menu.slice(0, showMore).map((value) => {
            const {
              id,
              image,
              price,
              slideTitle,
              description,
              foodCategory,
              foodType,
            } = value;

            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="food-items2-wrap">
                  <div className="food-img">
                    <img className="img-fluid" src={image} alt={slideTitle} />
                    <div className="batch">
                      <a>{foodCategory}</a>
                    </div>
                    <div className="pric-tag">
                      <span>{price}</span>
                    </div>
                  </div>
                  <div className="food-content">
                    <h3>
                      <Link
                        href={{
                          pathname: "/menu1",
                          query: { recommendedItemId: id }, // Pass the id as a query param
                        }}
                      >
                        {slideTitle}
                      </Link>
                    </h3>
                    <p>{description}</p>
                    <span className="food-type">{foodType}</span>{" "}
                    {/* Displaying the food type */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuList2;
