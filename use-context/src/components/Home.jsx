import React, { useState, useContext } from "react";
import { BiPlus } from "react-icons/bi";
import { ProductsContext } from "./ProductsContext";

const Home = () => {
  const { products, setCartItems } = useContext(ProductsContext);

  function addToCart(idx) {
    setCartItems((prevItem) => [
      ...prevItem,
      { name: products[idx].name, price: products[idx].price },
    ]);
  }
  return (
    <div className="home">
      {products.map((product, idx) => (
        <div className="card" key={idx}>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="img"
            />
          </div>
          <div className="desc">
            <div>{product.name}</div>
            <div>${product.price}</div>
          </div>
          <button className="btn" onClick={() => addToCart(idx)}>
            Add to cart <BiPlus className="icon" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
