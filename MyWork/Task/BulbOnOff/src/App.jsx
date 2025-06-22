import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [isOn, setIsOn] = useState(false);
  const [off, setoff] = useState("ON")

  const bulbRef = useRef(null);
  const bigDivRef = useRef(null);
  const buttonRef = useRef(null);
  const boxRef = useRef(null);


  const onOff = () => {
        setIsOn(!isOn);
        if(off === 'OFF'){
          setoff("ON");
        }else{
          setoff("OFF");
        }
   };

   useEffect(function(){
    // bulbRef.current.style.color = isOn ? "yellow":"black" ; 
    buttonRef.current.style.color = isOn ? "yellow":"black" ; 
    buttonRef.current.style.border = isOn ? "1px solid yellow":"1px solid black" ;  
    bigDivRef.current.style.backgroundColor = isOn ? "black":"yellow";
    boxRef.current.style.backgroundColor = isOn ? "yellow":"black" ; 

   },[isOn])


  return (
    <div ref= {bigDivRef} className='h-screen  flex justify-center items-center'>
      <div className='flex flex-col'>
       <div id="box" ref={boxRef} className='w-[30vh] h-[30vh]  bg-[#FFFF00] rounded-full  shadow-zinc-500' > </div>
       <button ref={buttonRef}  onClick={onOff} className="border font-bold border-black px-4 py-1 uppercase rounded-3xl">{off}</button>
      </div>
      {/* <i ref={bulbRef} class="text-[40vh] text-black ri-lightbulb-fill"></i> */}
    </div>
  )
}

export default App




// import React, { useEffect, useRef, useState } from 'react';
// import Eyes from './components/Eyes';

// const App = () => {
//   const [isOn, setIsOn] = useState(false);
//   const bulbRefs = [useRef(null), useRef(null)]; // Separate refs for each bulb
  
//   const onOff = () => {
//     setIsOn(!isOn);
//   };

//   useEffect(() => {
//     bulbRefs.forEach((ref) => {
//       if (ref.current) {//when ref are more than the element create to check // The condition if (bulb) is a common JavaScript way to ensure that the variable bulb is defined and not null or undefined before attempting to access or manipulate it
//       // The condition evaluates to true if bulb is a non-falsy value.
//         ref.current.style.backgroundColor = isOn ? 'yellow' : 'red';
//       }
//     });
//   }, [isOn]);

//   return (
//     <div className="flex flex-col  justify-center items-center mt-10 gap-4">
//        <div className='w-[30vw] flex-col  h-[30vw] flex items-center justify-center rounded-full border border-black'>
//       <div className='flex '>
//        {bulbRefs.map((ref, index) => (
//          <Eyes key={index} ref={ref} /> // Pass individual refs to each Eyes component
//       ))} 
//        </div>
//        <button onClick={onOff} className="border border-black px-3 py-1 rounded-3xl">Click</button>
            
//        </div>

//     </div>
//   );
// };

// export default App;
