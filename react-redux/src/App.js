import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter";

const App = () => {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  //   const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <br />
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default App;
