import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Products List</h1>
      <div className="list">
        <ProductCard name="Wireless Mouse" price="25.99" status="In Stock" />
        <ProductCard name="Keyboard" price="45.5" status="Out of Stock" />
        <ProductCard name="Monitor" price="199.99" status="In Stock" />
      </div>
    </div>
  );
}

export default App;