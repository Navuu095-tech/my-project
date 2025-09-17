import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, status }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProductCard;