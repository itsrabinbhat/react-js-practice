import React, { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(ProductsContext);
  var totalCost = 0;
  (() => {
    cartItems.length > 0 &&
      cartItems.forEach((item) => {
        totalCost += Number(item.price);
      });
  })();

  return (
    <div className="cart-container">
      <h3 className="title">Your Selected Products:</h3>
      {cartItems.length > 0
        ? cartItems.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  className="img"
                />
              </div>
              <div className="desc">
                <h4>Name: {item.name}</h4>
                <h4>Price: {item.price}</h4>
              </div>
            </div>
          ))
        : "Nothing Selected!"}

      <hr />
      <div className="total">
        <div>Total Items: {cartItems.length}</div>
        <div>Total Cost: ${totalCost}</div>
      </div>
    </div>
  );
};

export default Checkout;
