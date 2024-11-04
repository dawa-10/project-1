import React from "react";

export default function Navbar({ cart }) {
  return (
    <div className="Navbar">
      <div className="User">
        Welcome User!
      </div>

      <div className="Title">
        Groceries App 🍎
      </div>
{/* used inline if else to show cart length if cart has something */}
      <div className="Cart">
        {cart && cart.length > 0 ? (
          <div style={{ color: 'red' }}> 🛒{cart.length}</div>
        ) : (
          <span>🛒</span>
        )}
      </div>
    </div>
  );
}
