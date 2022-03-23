import React from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <h2>
          <Link to="/">Let's Confess</Link>
        </h2>
        <p>
          <Link to="/aboutus">About Us</Link>
        </p>
      </div>
    </div>
  );
};

export default Nabvar;
