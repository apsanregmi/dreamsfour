import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
import FilterAndRecommend from "../components/MenuList/FilterAndRecommend";
import menuData from "../data/menu.json";
import OrderSummary from "../components/MenuList/OrderSummary";
import Home3Testimonial from "../components/testimonial/Home3Testimonial";

function Menu1() {
  const [cartItems, setCartItems] = useState([]);

  // Add items to cart
  const addToCart = (item) => {
    const itemExists = cartItems.find((i) => i.id === item.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Remove items from cart
  const removeFromCart = (item) => {
    const itemExists = cartItems.find((i) => i.id === item.id);
    if (itemExists.quantity === 1) {
      setCartItems(cartItems.filter((i) => i.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    }
  };

  return (
    <Layout>
      {/* <Breadcrumb pageName="Menu List-01" pageTitle="Menu List-01" /> */}
      <div>
        <div className="mt-28 flex flex-col lg:flex-row justify-between gap-10 px-4 lg:px-0">
          {/* Left Side: Menu Filter and Recommendations */}
          <div className="w-full lg:w-2/3">
            <FilterAndRecommend addToCart={addToCart} />
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <OrderSummary
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>

        <div className="indian-menu pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 px-0 order-lg-1 order-2">
                <div className="menu-wrapper1 two">
                  <img
                    className="menu-top-left"
                    src="assets/images/icon/menu-top-left.svg"
                    alt="menu-top-left"
                  />
                  <img
                    className="menu-top-right"
                    src="assets/images/icon/menu-top-right.svg"
                    alt="menu-top-right"
                  />
                  <img
                    className="menu-btm-right"
                    src="assets/images/icon/menu-btm-right.svg"
                    alt="menu-btm-right"
                  />
                  <img
                    className="menu-btm-left"
                    src="assets/images/icon/menu-btm-left.svg"
                    alt="menu-btm-left"
                  />
                  <div className="section-title text-center pt-60">
                    <span>
                      <img
                        className="left-vec"
                        src="assets/images/icon/sub-title-vec.svg"
                        alt="sub-title-vec"
                      />
                      Welcome to Restho
                      <img
                        className="right-vec"
                        src="assets/images/icon/sub-title-vec.svg"
                        alt="sub-title-vec"
                      />
                    </span>
                    {/* <h2>Indian Menu</h2> */}
                  </div>
                  <div className="menu-list">
                    <ul>
                      <li>
                        <div className="sl">
                          <span>01.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Paneer Butter</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>02.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Veg Biriyani</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$15</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>03.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Fried Rice</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$22</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>04.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Indian Sambar</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>05.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Indian Rasam</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>06.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Chicken Tikka</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>07.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Vegetarian Burger</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="notice-location">
                      <h4>
                        <span>N.B:</span> All food are available in restauarnt
                        &amp; don’t waste your food.
                      </h4>
                      <p>Address: Mirpur DOHS, House No-167/170, Avenue-01.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-0 order-lg-2 order-1">
                <div className="food-orgin one">
                  <div className="resturent-name">
                    <h2>RESTHO</h2>
                  </div>
                  <img
                    src="assets/images/icon/food-origin.svg"
                    alt="food-origin"
                  />
                  <h2>Indian Menu</h2>
                  <img
                    src="assets/images/icon/food-origin.svg"
                    alt="food-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-divider">
          <img src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />
          <span />
          <img src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />
        </div>
        <div className="itlian-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 px-0">
                <div className="food-orgin two">
                  <div className="resturent-name">
                    <h2>RESTHO</h2>
                  </div>
                  <img
                    src="assets/images/icon/food-origin.svg"
                    alt="food-origin"
                  />
                  <h2>Italian Menu</h2>
                  <img
                    src="assets/images/icon/food-origin.svg"
                    alt="food-origin"
                  />
                </div>
              </div>
              <div className="col-lg-6 px-0">
                <div className="menu-wrapper1 two">
                  <img
                    className="menu-top-left"
                    src="assets/images/icon/menu-top-left.svg"
                    alt="menu-top-left"
                  />
                  <img
                    className="menu-top-right"
                    src="assets/images/icon/menu-top-right.svg"
                    alt="menu-top-right"
                  />
                  <img
                    className="menu-btm-right"
                    src="assets/images/icon/menu-btm-right.svg"
                    alt="menu-btm-right"
                  />
                  <img
                    className="menu-btm-left"
                    src="assets/images/icon/menu-btm-left.svg"
                    alt="menu-btm-left"
                  />
                  <div className="section-title text-center pt-60">
                    <span>
                      <img
                        className="left-vec"
                        src="assets/images/icon/sub-title-vec.svg"
                        alt="sub-title-vec"
                      />
                      Welcome to Restho
                      <img
                        className="right-vec"
                        src="assets/images/icon/sub-title-vec.svg"
                        alt="sub-title-vec"
                      />
                    </span>
                    {/* <h2>Indian Menu</h2> */}
                  </div>
                  <div className="menu-list">
                    <ul>
                      <li>
                        <div className="sl">
                          <span>01.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Paneer Butter</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>02.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Veg Biriyani</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$15</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>03.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Fried Rice</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$22</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>04.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Italian Sambar</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>05.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Italian Rasam</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>06.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Chicken Tikka</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>07.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Vegetarian Burger</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="notice-location">
                      <h4>
                        <span>N.B:</span> All food are available in restauarnt
                        &amp; don’t waste your food.
                      </h4>
                      <p>Address: Mirpur DOHS, House No-167/170, Avenue-01.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-divider">
          <img src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />
          <span />
          <img src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />
        </div>
        <div className="reguler-menu mb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 px-0 order-lg-1 order-2">
                <div className="menu-wrapper1 two">
                  <img
                    className="menu-top-left"
                    src="assets/images/icon/menu-top-left.svg"
                    alt="menu-top-left"
                  />
                  <img
                    className="menu-top-right"
                    src="assets/images/icon/menu-top-right.svg"
                    alt="menu-top-right"
                  />
                  <img
                    className="menu-btm-right"
                    src="assets/images/icon/menu-btm-right.svg"
                    alt="menu-btm-right"
                  />
                  <img
                    className="menu-btm-left"
                    src="assets/images/icon/menu-btm-left.svg"
                    alt="menu-btm-left"
                  />
                  <div className="section-title text-center pt-60">
                    <span>
                      <img
                        className="left-vec"
                        src="assets/images/icon/sub-title-vec.svg"
                        alt="sub-title-vec"
                      />
                      Welcome to Restho
                      <img
                        className="right-vec"
                        src="assets/images/icon/sub-title-vec.svg"
                        alt="sub-title-vec"
                      />
                    </span>
                    {/* <h2>Indian Menu</h2> */}
                  </div>
                  <div className="menu-list">
                    <ul>
                      <li>
                        <div className="sl">
                          <span>01.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Paneer Butter</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>02.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Veg Biriyani</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$15</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>03.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Fried Rice</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$22</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>04.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Sambar</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>05.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Rasam</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>06.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Chicken Tikka</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="sl">
                          <span>07.</span>
                        </div>
                        <div className="menu-content">
                          <div className="menu-title">
                            <h4>Vegetarian Burger</h4>
                            <span className="dot">
                              <img src="assets/images/icon/dot.svg" alt="" />
                            </span>
                            <span className="price">$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="notice-location">
                      <h4>
                        <span>N.B:</span> All food are available in restauarnt
                        &amp; don’t waste your food.
                      </h4>
                      <p>Address: Mirpur DOHS, House No-167/170, Avenue-01.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-0 order-lg-2 order-1">
                <div className="food-orgin three">
                  <div className="resturent-name">
                    <h2>RESTHO</h2>
                  </div>
                  <img
                    src="assets/images/icon/food-origin.svg"
                    alt="food-origin"
                  />
                  <h2>Reguler Menu</h2>
                  <img
                    src="assets/images/icon/food-origin.svg"
                    alt="food-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home3Testimonial />
    </Layout>
  );
}

export default Menu1;
