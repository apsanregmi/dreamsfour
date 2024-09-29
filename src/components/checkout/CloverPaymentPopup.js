import React, { useState } from 'react';

const CloverPaymentPopup = ({ total, onClose, onPaymentSuccess }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePayment = async () => {
    // Here you would integrate with Clover's SDK or payment API.
    // Example (pseudo-code):
    // const paymentResult = await cloverSDK.processPayment(paymentDetails, total);
    // if (paymentResult.success) { 
    //    onPaymentSuccess(); // Notify the parent of payment success
    //    onClose(); 
    // } else { 
    //    alert("Payment failed. Please try again."); 
    // }

    console.log('Processing payment...', paymentDetails);

    // Simulate a successful payment
    setTimeout(() => {
      onPaymentSuccess(); // Notify the parent of payment success
      onClose(); // Close the popup
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Enter Payment Details</h2>
        
        {/* Inform the user about future Clover integration */}
        <p className="text-sm text-gray-600 mb-4">
          Please note: This payment interface will soon be upgraded with Clover integration for secure transactions. Currently, no real payments are processed.
        </p>
        
        <div className="mb-4">
          <label className="block mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Expiration Date</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">CVV</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            disabled
          />
        </div>

        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg mr-2">Cancel</button>
          <button onClick={handlePayment} className="px-4 py-2 bg-green-500 text-white rounded-lg">Pay Rs {total.toFixed(2)}</button>
        </div>
      </div>
    </div>
  );
};

export default CloverPaymentPopup;
