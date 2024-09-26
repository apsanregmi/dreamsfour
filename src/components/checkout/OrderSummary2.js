import React, { useState } from 'react';

const OrderSummary2 = ({ cartItems, total, deliveryMethod, handleDeliveryMethodChange, handlePaymentMethodChange, paymentMethod, errors }) => {
  return (
    <div>
      <h3 className="text-lg font-medium">Order Summary</h3>
      <div className="max-h-80 overflow-y-auto">
        {/* Display each cart item */}
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-300">
            <div className="flex items-center">
              <img src={item.image} alt={item.slideTitle} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-medium text-gray-900">{item.slideTitle}</h4>
                <p className="text-gray-600">
                  {item.price} × {item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery or Pickup Option */}
      <div className="mt-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">Choose Delivery Method</label>
        <select
          value={deliveryMethod}
          onChange={handleDeliveryMethodChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="pickup">Pickup</option>
          <option value="delivery">Delivery</option>
        </select>
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

        {/* Payment Method */}
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Select Payment Method</label>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Method</option>
            <option value="clover">Clover</option>
          </select>
          {errors.paymentMethod && (
            <span className="text-red-500 text-sm mt-2">{errors.paymentMethod}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary2;
