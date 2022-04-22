import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import "./App.css";
import { ProductsProvider } from "./components/ProductsContext";

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
};

export default App;
