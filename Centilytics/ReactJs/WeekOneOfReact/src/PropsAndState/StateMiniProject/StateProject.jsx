import React, { useState } from "react";
const StateProject = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="state-project">
      <div>
      <h1>Value is : {value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement
      </button>
      </div>
    </div>
  );
};

export default StateProject;
