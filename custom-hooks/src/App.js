import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddUsers from "./components/AddUsers";
import UpdateUsers from "./components/UpdateUsers";
import FetchUsers from "./components/FetchUsers";
import RemoveUsers from "./components/RemoveUsers";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [isFetched, fetchedData] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="AddUsers" element={<AddUsers />} />
          <Route path="UpdateUsers" element={<UpdateUsers />} />
          <Route path="RemoveUsers" element={<RemoveUsers />} />
          <Route path="FetchUsers" element={<FetchUsers />} />
        </Routes>
      </BrowserRouter>

      <div
        style={{
          color: "#fff",
          position: "absolute",
          marginTop: "50%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {isFetched
          ? fetchedData.map((user, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    padding: "5px",
                    textAlign: "left",
                    border: "1px dashed #fff",
                    margin: "5px",
                  }}
                >
                  Name: {user.name}
                  <br />
                  Email: {user.email}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default App;
