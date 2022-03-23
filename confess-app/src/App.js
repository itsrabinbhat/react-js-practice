import React from "react";
import Nabvar from "./components/Nabvar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Nabvar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>{" "}
      <Footer />
    </Router>
  );
};

export default App;
