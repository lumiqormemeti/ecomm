import React from "react";
import "./SubscriptionForm.css";

const SubscriptionForm = () => {
  return (
    <div className="subscription-form">
      <h2 className="title">Subscribe to our newsletter</h2>
      <div className="input-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          aria-label="Email Address"
        />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default SubscriptionForm;
