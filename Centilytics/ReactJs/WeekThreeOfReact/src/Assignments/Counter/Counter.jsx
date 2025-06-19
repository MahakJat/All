import React, { useReducer, useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + 1;
    } else if (action.type === "decrement") {
      return state - 1;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="counter-parent">
      <div className="counter">
        <h3>count : {state}</h3>
        <div className="btns">
          <button
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            increment
          </button>
          <button
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
          >
            decrement
          </button>
          {/* in the dispatch function the object is passed with property name  type */}
          {/* with the help of  dispatch we perform action which is written in the reducer*/}
        </div>
      </div>
    </div>
  );
};

export default Counter;
