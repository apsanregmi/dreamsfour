import React, { useState } from 'react';
import CloverPaymentPopup from './CloverPaymentPopup';

const OrderSummary2 = ({ cartItems, total, deliveryMethod, handleDeliveryMethodChange, handlePaymentMethodChange, paymentMethod = 'cash-on-pickup', errors }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  // Function to handle payment method change
  const handlePaymentSelect = (event) => {
    handlePaymentMethodChange(event);
    if (event.target.value === 'clover') {
      setIsPopupOpen(true); // Open the payment popup when "Clover" is selected
    } else {
      setIsPopupOpen(false); // Close the popup if "Clover" is not selected
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium">Order Summary</h3>
      <div className="max-h-80 overflow-y-auto">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-300">
            <div className="flex items-center">
              <img src={item.image} alt={item.slideTitle} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-medium text-gray-900">{item.slideTitle}</h4>
                <p className="text-gray-600">{item.price} × {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery or Pickup Option - Radio Buttons */}
      <div className="mt-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">Choose Delivery Method</label>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="pickup"
              checked={deliveryMethod === 'pickup'}
              onChange={handleDeliveryMethodChange}
              className="mr-2"
            />
            Pickup
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="delivery"
              checked={deliveryMethod === 'delivery'}
              onChange={handleDeliveryMethodChange}
              className="mr-2"
            />
            Delivery
          </label>
        </div>
        {deliveryMethod === 'delivery' && (
          <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 border border-yellow-500 rounded-lg">
            Delivery is not available at the moment.
          </div>
        )}
      </div>

      {/* Total with tax included */}
      <div className="mt-6">
        <div className="flex justify-between py-1">
          <span className="text-gray-600">Total Amount (Tax incl.)</span>
          <span className="font-medium">Rs {total.toFixed(2)}</span>
        </div>

        {/* Payment Method - Radio Buttons */}
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Select Payment Method</label>
          <div className="flex flex-col">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="clover"
                checked={paymentMethod === 'clover'}
                onChange={handlePaymentSelect}
                className="mr-2"
              />
              Clover
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cash-on-pickup"
                checked={paymentMethod === 'cash-on-pickup'}
                onChange={handlePaymentSelect}
                className="mr-2"
              />
              Cash on pick up
            </label>
          </div>
          {errors.paymentMethod && <span className="text-red-500 text-sm mt-2">{errors.paymentMethod}</span>}
        </div>
      </div>

      {/* Render the Clover Payment Popup */}
      {isPopupOpen && (
        <CloverPaymentPopup
          total={total}
          onClose={() => setIsPopupOpen(false)}
          onPaymentSuccess={() => setIsPaymentSuccessful(true)} // Update payment status on success
        />
      )}
    </div>
  );
};

export default OrderSummary2;
