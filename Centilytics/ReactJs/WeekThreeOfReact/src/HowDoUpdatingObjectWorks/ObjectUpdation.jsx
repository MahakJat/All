import React, { useState,useEffect } from "react";

const ObjectUpdation = () => {
  const [object, setObject] = useState({
    name: "Mahak",
    age: 20,
    college: "SISTec",
  });

  const updateOriginalObjectAge = () => {
    object.age = object.age === 20 ? 21 : 20;
    console.log("update original object " + object.name +" "+ object.age);
  };
  const updationByMakingCopyName = () => {
    setObject((prev) => ({
      ...prev,
      name: prev.name === "Muskan" ? "Mahak" : "Muskan",
    }));
    console.log("updation By Making Copy " + object.name +" "+ object.age);
  };

  useEffect(() => {
    console.log("mounted ");

    return console.log(" unmounted ");
  }, []);

  return (
    <div className="objectupdation">
      <div className="object-div">
        <h3>{object.name}</h3>
        <h3>{object.age}</h3>
        <h3>{object.college}</h3>
        <button onClick={()=>{
            updateOriginalObjectAge()
        }}>Update Original Object age</button>
        <button 
        onClick={()=>{
            updationByMakingCopyName() 
        }}
        >Updation By Making Copy name</button>
      </div>
    </div>
  );
};

export default ObjectUpdation;
