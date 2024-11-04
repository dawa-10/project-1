import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import '../App.css';

export default function ProductContainer({ handleClick }) {
  return (
    <div className="ProductContainer">
      {products.map(item => (
        <ProductCard key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
}
