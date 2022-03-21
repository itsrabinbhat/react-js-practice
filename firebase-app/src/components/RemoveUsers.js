import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleChange, removeUser } from "../functions/handleData";

const RemoveUsers = () => {
  const [userData, setUserData] = useState({});
  return (
    <div>
      <h2>Remove User:</h2>
      <form onSubmit={(e) => removeUser(e, userData)}>
        <input
          type="number"
          name="UserID"
          placeholder="Your User ID"
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

export default RemoveUsers;
