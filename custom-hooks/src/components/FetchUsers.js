import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../functions/handleData";
import { useTitle } from "../hooks/useTitle";

const FetchUsers = () => {
  useTitle("Fetch Users");
  const [fetchedUsers, setFetchedUsers] = useState([]);
  return (
    <>
      <div id="fetch-users">
        <button onClick={() => fetchUsers(setFetchedUsers)}>Fetch Users</button>

        <div className="users">
          {fetchedUsers.length > 0
            ? fetchedUsers.map((user, idx) => {
                return (
                  <div className="user" key={idx}>
                    <p>Name: {user.Name}</p>
                    <p>Address: {user.Address}</p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <Link to="/">
        <button id="goto-home">Go to home</button>
      </Link>
    </>
  );
};

export default FetchUsers;
