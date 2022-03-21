import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddUsers from "./components/AddUsers";
import UpdateUsers from "./components/UpdateUsers";
import FetchUsers from "./components/FetchUsers";
import RemoveUsers from "./components/RemoveUsers";

const App = () => {
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
    </div>
  );
};

export default App;
