import React, { useState, useEffect } from "react";
import BillingDetails from "../components/checkout/BillingDetails";
import ShippingDetails from "../components/checkout/ShippingDetails";
import OrderSummary2 from "../components/checkout/OrderSummary2";
import PlaceOrderButton from "../components/checkout/PlaceOrderButton";
import Breadcrumb from "../components/common/Breadcrumb";
import { useRouter } from 'next/router'; // Import useRouter for query params
import Layout from "../layout/Layout";

const Checkout = () => {
  const router = useRouter();
  const { cartItems: cartItemsQuery, total: totalQuery } = router.query;

  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
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

  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [errors, setErrors] = useState({});

  // Parse cart items and set total from query parameters
  useEffect(() => {
    if (cartItemsQuery) {
      setCartItems(JSON.parse(cartItemsQuery)); // Parse cart items from query string
    }
    if (totalQuery) {
      setCartTotal(parseFloat(totalQuery)); // Set cart total from query string
      setTotal(parseFloat(totalQuery)); // No additional tax added
    }
  }, [cartItemsQuery, totalQuery]);

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

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  // Validate all fields
  const validateFields = () => {
    const newErrors = {};

    // Validate billing details
    Object.keys(billingDetails).forEach((field) => {
      if (!billingDetails[field]) {
        newErrors[`billing_${field}`] = `Please fill in your billing ${field}`;
      }
    });

    // Validate payment method
    if (!paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateFields()) {
      // Proceed with placing the order (e.g., integrate with payment gateway)
      console.log("Placing order...");
    } else {
      console.log("Fix validation errors before submitting");
    }
  };

  return (
    <Layout>
      <Breadcrumb pageName="Checkout" pageTitle="Checkout" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <BillingDetails
              billingDetails={billingDetails}
              handleBillingChange={handleBillingChange}
              errors={errors} // Pass errors for validation
            />
            <ShippingDetails
              shippingDetails={shippingDetails}
              handleShippingChange={handleShippingChange}
            />
          </div>
          <div>
            <OrderSummary2
              cartItems={cartItems}
              cartTotal={cartTotal}
              total={total}
              deliveryMethod={deliveryMethod}
              handleDeliveryMethodChange={handleDeliveryMethodChange}
              handlePaymentMethodChange={handlePaymentMethodChange}
              paymentMethod={paymentMethod}
              errors={errors} // Pass errors for validation
            />
            <PlaceOrderButton handlePlaceOrder={handlePlaceOrder} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
