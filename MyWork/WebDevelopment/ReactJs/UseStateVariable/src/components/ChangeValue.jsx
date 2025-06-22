import React from 'react'
import Button from "./Button";
import ButtonTwo from "./ButtonTwo";
import { useState } from "react";

const ChangeValue = () => {
    const [A, setA] = useState(0);
    const reset = ()=>{
       setA(0)
    }
    const increase = ()=>{
        setA(A+1);
    }
      const decrease = ()=>{
        setA(A-1);
    } 
     const jump = ()=>{
        setA(A+100);
    }
    return (
     <>
        <div className='h-screen bg-[#EAEEF1] flex justify-center items-center'>
            <div className='box p-[3vh] h-[50vh] w-[50vh] rounded-[5vh] flex flex-col gap-4 bg-transparent text-center'>
            <h1 className="font-bold text-[5vh] text-[#376359]">Value of A : {A}</h1>
            <ButtonTwo text="increace" func = {increase}/>
            <ButtonTwo text="decrease" func = {decrease}/>
            <ButtonTwo text="jump" func = {jump}/>
            <ButtonTwo text="reset" func = {reset}/>
            </div>
        </div>
     </>
    );
}

export default ChangeValue