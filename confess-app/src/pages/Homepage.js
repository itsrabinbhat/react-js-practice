import React from "react";
import AddConfession from "../components/AddConfession";
import ConfessionList from "../components/ConfessionList";
import useTitle from "../hooks/useTitle";

const Homepage = () => {
  useTitle("Confession | Home");
  return (
    <div>
      <AddConfession />
      <ConfessionList />
    </div>
  );
};

export default Homepage;
