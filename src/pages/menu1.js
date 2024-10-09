import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../layout/Layout";
import FilterAndRecommend from "../components/MenuList/FilterAndRecommend";
import menuData from "../data/menu.json";
import OrderSummary from "../components/MenuList/OrderSummary";
import Home3Testimonial from "../components/testimonial/Home3Testimonial";

function Menu1() {
  const router = useRouter();
  const { recommendedItemId } = router.query;
  const [recommendedItem, setRecommendedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false); // New state for toggling OrderSummary

  // Fetch the recommended item based on the query parameter
  useEffect(() => {
    if (recommendedItemId) {
      const item = menuData.menu.find((i) => i.id === recommendedItemId);
      setRecommendedItem(item);
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

  // Toggle the visibility of the OrderSummary
  const toggleOrderSummary = () => {
    setIsOrderSummaryOpen(!isOrderSummaryOpen);
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
                  <h4 className="text-lg font-bold">
                    {recommendedItem.slideCategoryTitle}
                  </h4>
                  <p className="text-gray-600">{recommendedItem.description}</p>
                  <p className="text-lg font-bold text-gray-900">
                    ${recommendedItem.price}
                  </p>
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

        {/* Right Side: Order Summary (Hidden on small screens) */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg p-6 hidden lg:block">
          <OrderSummary
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>

      {/* Mobile Floating Cart Button */}
      <button
        className="fixed bottom-5 right-5 bg-yellow-500 text-white p-4 rounded-full shadow-lg lg:hidden"
        onClick={toggleOrderSummary}
      >
        <span className="material-icons">Cart Items 🛒</span>
        <span className="ml-2">{cartItems.length}</span>
      </button>

      {/* Mobile Order Summary Modal */}
      {isOrderSummaryOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 lg:hidden">
          <div className="bg-white w-11/12 mt-40 max-h-[70vh] p-6 rounded-lg relative overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={toggleOrderSummary}
            >
              ✕
            </button>

            <OrderSummary
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      )}

      <div className="mt-10">
        <Home3Testimonial />
      </div>
    </Layout>
  );
}

export default Menu1;
