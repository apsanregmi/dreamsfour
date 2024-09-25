import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../layout/Layout";
import FilterAndRecommend from "../components/MenuList/FilterAndRecommend";
import menuData from "../data/menu.json";
import OrderSummary from "../components/MenuList/OrderSummary";
import Home3Testimonial from "../components/testimonial/Home3Testimonial";

function Menu1() {
  const router = useRouter();
  const { recommendedItemId } = router.query; // Get the recommended item ID from the query
  const [recommendedItem, setRecommendedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Fetch the recommended item based on the query parameter
  useEffect(() => {
    if (recommendedItemId) {
      const item = menuData.menu.find((i) => i.id === recommendedItemId);
      setRecommendedItem(item); // Set the recommended item if it exists
    }
  }, [recommendedItemId]);

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
      <div className="mt-28 flex flex-col lg:flex-row justify-between gap-10 px-4 lg:px-0">
        {/* Left Side: Menu Filter and Recommendations */}
        <div className="w-full lg:w-2/3">
          <FilterAndRecommend addToCart={addToCart} />

          {/* Display the recommended item */}
          {recommendedItem && (
            <div className="mt-6 p-4 bg-yellow-100 rounded-lg shadow">
              <h2 className="text-xl font-bold">Recommended Item</h2>
              <div className="flex items-center mt-4">
                <img
                  src={recommendedItem.image}
                  alt={recommendedItem.slideCategoryTitle}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{recommendedItem.slideCategoryTitle}</h4>
                  <p className="text-gray-600">{recommendedItem.description}</p>
                  <p className="text-lg font-bold text-gray-900">${recommendedItem.price}</p>
                  <button
                    onClick={() => addToCart(recommendedItem)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-full mt-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
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

      <Home3Testimonial />
    </Layout>
  );
}

export default Menu1;
