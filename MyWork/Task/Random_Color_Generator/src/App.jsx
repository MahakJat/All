import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const App = () => {
 
 const iconRef = useRef(null);
 const buttonRef = useRef(null);
 const [color1, setcolor1] = useState(255) //initailizing it with 255 because i want the initail color with changing to be white be the useeffect will run atleast one time with clicking on the button on loading and if there will be 0 then the initail color will be black
 const [color2, setcolor2] = useState(255)
 const [color3, setcolor3] = useState(255)

 const changeValue = ()=>{
  setcolor1(Math.floor(Math.random() * 256));
  setcolor2(Math.floor(Math.random() * 256));
  setcolor3(Math.floor(Math.random() * 256));
 }


//  this code will run for first time on loading and will set the initial values of the background to rgb(255,255,255)
  useEffect(function(){
    iconRef.current.style.color = `rgb(${color1},${color2},${color3})` 
    buttonRef.current.style.backgroundColor = `rgb(${color1},${color2},${color3})` 
  },[color1,color2,color3])

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col bg-[#070505] '>
      <i ref={iconRef}  className=" text-[25vw]  ri-emotion-happy-fill"></i>
      <button onClick={()=>{
        changeValue()
      }} ref={buttonRef} className='font-semibold text-xl bg-black px-3 py-2 rounded-full'>Change</button>
    </div>
  )
}

export default App