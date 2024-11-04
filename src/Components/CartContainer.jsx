import React from "react";
import CartCard from "./CartCard";

export default function CartContainer({ cart, setCart, updateQuantity, removeItem }) {
  const calculateTotal = () =>
    cart.reduce((total, item) => total + parseFloat((item.price).replace("$","")) * item.quantity, 0);

  return (
    <div className="CartContainer">
        <span className="CartTitle">Cart items : {cart.length}</span>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map(item => (
          <CartCard key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
        ))
      )}
      <div className="Button">
      <div className="Empty">
      <button onClick={() => setCart([])}>Empty Cart</button>
      </div>
      <div className="Checkout">
      <button>Checkout:{calculateTotal().tofix}</button>
      </div>
      
      </div>
      
    </div>
  );
}
