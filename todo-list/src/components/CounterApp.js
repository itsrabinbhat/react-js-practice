import React, { useRef } from "react";

const CounterApp = () => {
  //   const [count, setCount] = useState(0);
  let count = 0;
  let countRef = useRef(null);
  return (
    <div style={{ textAlign: "center" }}>
      <span ref={countRef}>{count}</span>
      <br />
      <button
        onClick={() => {
          count++;
          countRef.current.innerText = count;
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default CounterApp;
