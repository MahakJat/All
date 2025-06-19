import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const incrementCount = () => {
    console.log(count)
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  const incrementCount1 = () => {
    console.log(count1)
    setCount1((prev) => prev + 1);
    setCount1((prev) => prev + 1);
    setCount1((prev) => prev + 1);
  };
  return (
    <div>
      <h1>count is : {count}</h1>
      <button
        onClick={incrementCount}
      >
        +3
      </button>

      <h1>count is : {count1}</h1>
      <button
        onClick={incrementCount1}
      >
        +3
      </button>
    </div>
  );
};

export default Example;
