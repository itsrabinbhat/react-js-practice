import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const HomePage = () => {
  useTitle("Home");
  return (
    <div>
      <h2>Manage Users:</h2>
      <div className="btn-container">
        <Link to="AddUsers">
          <button>Add user</button>
        </Link>
        <Link to="UpdateUsers">
          <button>Update user</button>
        </Link>
        <Link to="RemoveUsers">
          <button>Remove user</button>
        </Link>
        <Link to="FetchUsers">
          <button>Fetch user</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
