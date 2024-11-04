import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import "../App.css"

export default function GroceriesAppContainer() {
    {/*used state to manage cart and display warning message  */}
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
//function to handle adding item
  const handleClick = (item, quantity) => {
    //displaying waring if quantinty is less than zero
    if (quantity <= 0) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
//to check if item already exist
    const existingProduct = cart.find(product => product.id === item.id);
    if (existingProduct) {
      const updatedCart = cart.map(product =>
        product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
      );
      setCart(updatedCart);
    } else {
        //to add item if it doesnt exist
      setCart([...cart, { ...item, quantity }]);
    }
  };
// to update item's quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };
// to remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <Navbar cart={cart}/>
      <div className="Body">
        <div className="pContainer">
        <ProductContainer handleClick={handleClick} />
        </div>
        <CartContainer cart={cart} setCart={setCart} updateQuantity={updateQuantity} removeItem={removeItem} />
      </div>
      {warning && <div className="warning">Please select a quantity greater than 0.</div>}
    </div>
  );
}
