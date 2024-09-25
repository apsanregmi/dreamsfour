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

              </div>
      <Home3Testimonial />
    </Layout>
  );
}

export default Menu1;
