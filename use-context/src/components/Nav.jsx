import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ProductsContext } from "./ProductsContext";

const Nav = () => {
  const { cartItems } = useContext(ProductsContext);
  console.log(cartItems);
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          <Link to="/">Shopy</Link>
        </div>
        <div className="nav-link">
          <Link to="/checkout">
            <FaShoppingCart />
            <span className="item-count">{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
