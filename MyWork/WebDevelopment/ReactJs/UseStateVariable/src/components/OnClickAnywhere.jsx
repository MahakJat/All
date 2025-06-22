import React from "react";
import Button from "./Button";
import { useState } from "react";

const OnClickAnywhere = () => {
  const [A, setA] = useState(0);
  console.log(A);
  const reset = () => {
    setA(0);
  };
  return (
    <>
      <div
        className=" h-screen  flex justify-center items-center relative bg-[#D6D4CE]"
        onClick={() => {
          setA(A + 1);
        }}
      >
        <div className="flex  items-center bg-[#D6D4CE] justify-center w-[25vw] h-[20vw] border border-[#413F3B] rounded-[4vh] shadow-[4px_4px_4px_rgba(0,0,0,0.2)]">
          <h1 className="font-bold text-[5vh] pb-20">Value of A : {A}</h1>
        </div>
      </div>
      <Button text="reset" func={reset}  />
    </>
  );
};

export default OnClickAnywhere;
