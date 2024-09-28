import React from "react";

const BillingDetails = ({ billingDetails, handleBillingChange, errors }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="form-group">
            <label className="block text-sm mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={billingDetails.billing_firstName}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.billing_firstName && (
              <span className="text-red-500 text-sm">{errors.billing_firstName}</span>
            )}
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={billingDetails.billing_lastName}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.billing_lastName && (
              <span className="text-red-500 text-sm">{errors.billing_lastName}</span>
            )}
          </div>

          {/* Country */}
          <div className="form-group">
            <label className="block text-sm mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={billingDetails.billing_country}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.billing_country && (
              <span className="text-red-500 text-sm">{errors.billing_country}</span>
            )}
          </div>

          {/* Address */}
          <div className="form-group">
            <label className="block text-sm mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={billingDetails.billing_address}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.billing_address && (
              <span className="text-red-500 text-sm">{errors.billing_address}</span>
            )}
          </div>

          {/* City */}
          <div className="form-group">
            <label className="block text-sm mb-1">City</label>
            <input
              type="text"
              name="city"
              value={billingDetails.billing_city}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.billing_city && (
              <span className="text-red-500 text-sm">{errors.billing_city}</span>
            )}
          </div>

          {/* Postcode */}
          <div className="form-group">
            <label className="block text-sm mb-1">Postcode</label>
            <input
              type="text"
              name="postcode"
              value={billingDetails.billing_postcode}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.billing_postcode && (
              <span className="text-red-500 text-sm">{errors.billing_postcode}</span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={billingDetails.billing_phone}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.billing_phone && (
              <span className="text-red-500 text-sm">{errors.billing_phone}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={billingDetails.billing_email}
              onChange={handleBillingChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.billing_email && (
              <span className="text-red-500 text-sm">{errors.billing_email}</span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
