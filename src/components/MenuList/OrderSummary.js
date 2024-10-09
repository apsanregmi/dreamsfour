import React from 'react';
import { useRouter } from 'next/router';

const OrderSummary = ({ cartItems, addToCart, removeFromCart }) => {
  const router = useRouter();

  // Calculate subtotal, tax, and total amount
  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );
    const tax = subtotal * 0.1; // Assuming 10% tax
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotal();

  // Handle "Order Now" click to navigate to Checkout and pass cart data
  const handleOrderNow = () => {
    router.push({
      pathname: '/check-out',
      query: {
        cartItems: JSON.stringify(cartItems), // Passing cart items as JSON string
        total: total.toFixed(2), // Total price
      },
    });
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg sticky top-28">
      <h2 className="text-xl font-semibold mb-4">Current Order</h2>

      {/* If no items in the cart */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in the cart.</p>
      ) : (
        <div>
          {/* Scrollable Cart Items Section */}
          <div className="max-h-56 overflow-y-auto">
            {/* Display each cart item */}
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-300"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.slideTitle}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{item.slideTitle}</h4>
                    <p className="text-gray-600">
                      {item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="text-black border border-yellow-500  hover:bg-yellow-400 hover:text-black font-bold py-1 px-3 rounded-full"
                  >
                  -
                  </button>
                  <span className="mx-2 text-yellow-600">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="text-white bg-yellow-500 hover:bg-yellow-700 font-bold py-1 px-3 rounded-full "
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Payment summary */}
      {cartItems.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium">Payment Summary</h3>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Total Tax</span>
            <span className="font-medium">Rs {tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-300 mt-2">
            <span className="font-semibold text-lg">Total Amount</span>
            <span className="font-semibold text-lg text-green-600">
              Rs {total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleOrderNow}
            className="w-full mt-4 py-2 bg-black text-white font-semibold rounded-lg"
          >
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
