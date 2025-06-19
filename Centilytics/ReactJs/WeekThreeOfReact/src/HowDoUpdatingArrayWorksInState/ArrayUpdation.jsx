import React, { useEffect, useState } from "react";
  
const ArrayUpdation = () => {
  const [fruits, setFruits] = useState([
    "Apple",
    "Mango",
    "Banana",
    "Strawberry",
    "Orange",
    "Watermelon",
    "Pineapple",
    "Papaya",
    "Pomegranate",
  ]);
  const OriginalArrayUpdate = () => {
    fruits.push("Grapes");
    console.log("When the Original array updated " + fruits);
  };
  const setNewArrayToState = () => {
    setFruits([...fruits, "Guava"]); //make a new array
    console.log(
      "When the new array is created and updation is done in that " + fruits
    );
  };
  useEffect(() => {
    console.log("mounted ");
   
    return( console.log(" unmounted ")
  )
  }, []);
  return (
    <div className="ArrayUpdationDiv">
      <div className="fruits">
      {fruits.map((elem) => (
        <h3>{elem}</h3>
      ))}
      <button
        onClick={() => {
          OriginalArrayUpdate();
        }}
      >
        OriginalArrayUpdate
      </button>
      <button
        onClick={() => {
          setNewArrayToState();
        }}
      >
        setNewArrayToState
      </button>
      </div>
    </div>
  );
};

export default ArrayUpdation;
