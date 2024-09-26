import React from "react";

const ShippingDetails = ({ shippingDetails, handleShippingChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Ship to a Different Address?</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label className="block text-sm mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={shippingDetails.firstName}
              onChange={handleShippingChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="form-group">
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={shippingDetails.lastName}
              onChange={handleShippingChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Street Address</label>
          <input
            type="text"
            name="address"
            value={shippingDetails.address}
            onChange={handleShippingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Town / City</label>
          <input
            type="text"
            name="city"
            value={shippingDetails.city}
            onChange={handleShippingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="form-group mt-4">
          <label className="block text-sm mb-1">Postcode</label>
          <input
            type="text"
            name="postcode"
            value={shippingDetails.postcode}
            onChange={handleShippingChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingDetails;
