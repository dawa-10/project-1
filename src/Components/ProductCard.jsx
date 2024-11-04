import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";
import "../App.css"
export default function ProductCard({ item, handleClick }) {
  const [qty, setQuantity] = useState(0);
  const { productName, image, price, brand } = item;
   let newPrice = parseFloat((price).replace("$",""));
  return (
    <div className="ProductCard">
        <p>{productName}</p>
      <div className="image">
        <img src={image} alt={productName} />
      </div>
      <span>{brand}</span>
      <div className="details">
      <QuantityCounter quantity={qty} setQuantity={setQuantity} />
        <p>Price: {price}</p>
        <button onClick={() => {
          handleClick(item, qty);
          setQuantity(0);
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
