import React from "react";
import "./GridCard.css";

const Card = ({ title, price, features }) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="price">${price}</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li className="feature-item" key={index}>
            &#x2713; {feature}
          </li>
        ))}
      </ul>
      <button className="purchase-button">Purchase Now</button>
    </div>
  );
};

export default Card;
