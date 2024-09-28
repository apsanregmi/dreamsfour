// prepareEmailData.js

export const prepareEmailData = (orderDetails) => {
    // Destructure order details for readability
    const {
      cartItems,
      cartTotal,
      order_id,
      billing_firstName,
      billing_lastName,
      billing_address,
      billing_city,
      billing_postcode,
      billing_phone,
      billing_email,
      shipping_firstName,
      shipping_lastName,
      shipping_address,
      shipping_city,
      shipping_postcode,
      paymentMethod,
      deliveryMethod,
    } = orderDetails;
  
    // Flatten cart items as a string
    const cartItemsString = cartItems
      .map(
        (item) =>
          `Title: ${item.slideTitle}, Price:  ${item.price}, Quantity: ${item.quantity}`
      )
      .join("\n");
  
    // Handle shipping information conditionally
    const shippingInfo = shipping_firstName
      ? `Shipping Information:\nFirst Name: ${shipping_firstName}\nLast Name: ${shipping_lastName}\nAddress: ${shipping_address}\nCity: ${shipping_city}\nPostcode: ${shipping_postcode}`
      : "Shipping information not provided (Pickup)";
  
    // Return the formatted data to pass to EmailJS
    return {
      cartTotal,
      order_id,
      billing_firstName,
      billing_lastName,
      billing_address,
      billing_city,
      billing_postcode,
      billing_phone,
      billing_email,
      shippingInfo, // Conditionally handled shipping info
      cartItemsString, // Flattened cart items
      paymentMethod,
      deliveryMethod,
    };
  };
  