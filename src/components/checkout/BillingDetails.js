import React from "react";

const BillingDetails = ({ billingDetails, handleBillingChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label className="block text-sm mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={billingDetails.firstName}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="form-group">
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={billingDetails.lastName}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Country / Region</label>
          <input
            type="text"
            name="country"
            value={billingDetails.country}
            onChange={handleBillingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Street Address</label>
          <input
            type="text"
            name="address"
            value={billingDetails.address}
            onChange={handleBillingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Town / City</label>
          <input
            type="text"
            name="city"
            value={billingDetails.city}
            onChange={handleBillingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Postcode</label>
          <input
            type="text"
            name="postcode"
            value={billingDetails.postcode}
            onChange={handleBillingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={billingDetails.phone}
            onChange={handleBillingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={billingDetails.email}
            onChange={handleBillingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
