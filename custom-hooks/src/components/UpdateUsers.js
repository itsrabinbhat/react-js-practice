import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleChange, updateUser } from "../functions/handleData";
import { useTitle } from "../hooks/useTitle";

const UpdateUsers = () => {
  useTitle("Update Users");
  const [userData, setUserData] = useState({});
  return (
    <div>
      <h2>Update User:</h2>
      <form onSubmit={(event) => updateUser(event, userData)}>
        <input
          type="number"
          name="UserID"
          placeholder="Your User ID"
          onChange={(e) => handleChange(e, userData, setUserData)}
        />
        <input
          type="text"
          name="Name"
          placeholder="New Name"
          onChange={(e) => handleChange(e, userData, setUserData)}
        />
        <input
          type="text"
          name="Address"
          placeholder="New Address"
          onChange={(e) => handleChange(e, userData, setUserData)}
        />
        <button type="submit">Update</button>
      </form>
      <Link to="/">
        <button id="goto-home">Go to home</button>
      </Link>
    </div>
  );
};

export default UpdateUsers;
