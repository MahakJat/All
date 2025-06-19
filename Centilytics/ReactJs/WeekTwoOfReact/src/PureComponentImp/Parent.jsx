import React, { useState } from "react";
import RegularComponent from "./RegularComponent";
import PureComponent from "./PureComponent";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  return (
    <div>
      <h1>Parent Div</h1>
      <div className="parent-div">
        <h4>count : {count}</h4>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment Count
        </button>
        <button
          onClick={() => {
            setMessage("hello");
          }}
        >
          Chnage Message
        </button>
      </div>
      <div className="regular-and-pure">
        <RegularComponent message={message} />
        <PureComponent message={message} /> 
        {/* jab message wali button click karege toh "" se hello hoga toh purecomponent phir se render hoga likin jab hello message ja juka hoga ek baar props me aur phir se change message pe click toh pure function rerender nhi hoga kyuki message me phir se hello hi aaye joh ki same hai change nhi hoga */}
      </div>
    </div>
  );
};

export default Parent;
