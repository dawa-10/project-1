import React from "react";
import QuantityCounter from "./QuantityCounter";
import "../App.css"

export default function CartCard({ item, updateQuantity, removeItem }) {
 const {productName, price, quantity, image} = item;
    return (
    <div className="CartCard">
      <div className="CartImg">
        <img src={image} alt={productName} />
        <p>{productName}</p>
        {/*used to adjust item quantity */}
        <QuantityCounter
          quantity={quantity}
          setQuantity={(newQuantity) => updateQuantity(item.id, newQuantity)}
        />
      </div>
      <div className="CartDetails">
        <p>Price: ${parseFloat((price).replace("$","") * quantity)}</p>
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}
