import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import { handleChange, addUser } from "../functions/handleData";
import { useState } from "react";
import { useTitle } from "../hooks/useTitle";

const AddUsers = () => {
  useTitle("Add Users");
  const [userData, setUserData] = useState({});
  return (
    <div>
      <h2>Add User:</h2>
      <form onSubmit={(event) => addUser(event, userData)}>
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          onChange={(e) => handleChange(e, userData, setUserData)}
        />
        <input
          type="text"
          name="Address"
          placeholder="Your Address"
          onChange={(e) => handleChange(e, userData, setUserData)}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">
        <button id="goto-home">Go to home</button>
      </Link>
    </div>
  );
};

export default AddUsers;
