import React from "react";
import { useState,useEffect } from "react";

const CountingReset = ({ person }) => {
  const [score, setScore] = useState(0);

  
  return (
    <div>
      <h1>
        {person}'s score: {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
};

export default CountingReset;
