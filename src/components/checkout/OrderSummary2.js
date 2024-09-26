import React from "react";

const OrderSummary = ({ cartTotal, tax, total, handlePaymentMethodChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
      <div className="bg-white shadow p-6 rounded-lg">
        <p className="mb-2">Subtotal: Rs {cartTotal.toFixed(2)}</p>
        <p className="mb-2">Tax: Rs {tax.toFixed(2)}</p>
        <p className="mb-2">Total: Rs {total.toFixed(2)}</p>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Payment Method</h3>
          <label className="block mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="clover"
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            Pay with Clover
          </label>
        </div>
        <div className="mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            I have read and agree to the website terms and conditions
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
