import React from "react";
import AddConfession from "./components/AddConfession";
import ConfessionList from "./components/ConfessionList";
import Nabvar from "./components/Nabvar";

const App = () => {
  return (
    <div>
      <Nabvar />
      <AddConfession />
      <ConfessionList />
    </div>
  );
};

export default App;
