import React from "react";

const PlaceOrderButton = ({ handlePlaceOrder }) => {
  return (
    <button
      onClick={handlePlaceOrder}
      className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded-lg w-full"
    >
      Place Order
    </button>
  );
};

export default PlaceOrderButton;
