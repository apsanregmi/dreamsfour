import React, { useState, useEffect } from "react";
import BillingDetails from "../components/checkout/BillingDetails"
import ShippingDetails from "../components/checkout/ShippingDetails";
import OrderSummary from "../components/checkout/OrderSummary2";
import PlaceOrderButton from "../components/checkout/PlaceOrderButton";
import Breadcrumb from "../components/common/Breadcrumb";

import Layout from "../layout/Layout";

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
  });

  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postcode: "",
  });

  const [cartTotal, setCartTotal] = useState(150); // Example default value
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Calculate tax and total
  useEffect(() => {
    const calculatedTax = cartTotal * 0.05; // Example 5% tax
    const calculatedTotal = cartTotal + calculatedTax;
    setTax(calculatedTax);
    setTotal(calculatedTotal);
  }, [cartTotal]);

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === "clover") {
      // Call Clover payment API here
      console.log("Placing order via Clover...");
    } else {
      console.log("Select a payment method");
    }
  };

  return (
    <Layout>
      <Breadcrumb pageName="Checkout" pageTitle="Checkout"></Breadcrumb>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <BillingDetails
            billingDetails={billingDetails}
            handleBillingChange={handleBillingChange}
          />
          <ShippingDetails
            shippingDetails={shippingDetails}
            handleShippingChange={handleShippingChange}
          />
        </div>
        <div>
          <OrderSummary
            cartTotal={cartTotal}
            tax={tax}
            total={total}
            handlePaymentMethodChange={handlePaymentMethodChange}
          />
          <PlaceOrderButton handlePlaceOrder={handlePlaceOrder} />
        </div>
      </div>
      
    </div>
    </Layout>
  );
};

export default Checkout;
