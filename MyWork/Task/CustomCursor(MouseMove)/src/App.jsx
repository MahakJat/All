import React, { useEffect, useRef, useState } from 'react'
import { use } from 'react'

const App = () => {
  const [xValue, setxValue] = useState(0);
  const [yValue, setyValue] = useState(0);
  const cursorRef = useRef(null) 
   
  const mouseOver = ()=>{
    if(cursorRef.current){
      cursorRef.current.style.transform = 'scale(1.9)';
    }
  }

  const mouseLeave = ()=>{
    if(cursorRef.current){
      cursorRef.current.style.transform = 'scale(1)';
    }
  }

  const mouseValues = (e)=>{
    setxValue(e.clientX)
    setyValue(e.clientY)
  }
  useEffect(function(){
    if(cursorRef.current){
      cursorRef.current.style.left = `${xValue}px` //${xValue - 20}px to get cursur at the center of the custom cursor
      cursorRef.current.style.top = `${yValue}px`
    }
  },[xValue,yValue]);

  return (
    <div  onMouseMove={mouseValues} className='overflow-hidden h-screen cursor-none flex justify-center items-center bg-black'>  
       <h1 className='text-white text-[10vw] z-10 mix-blend-difference' onMouseLeave={mouseLeave} onMouseOver={mouseOver}  >Mahak Jat</h1> 
       {/* increased z index of the h1 and give it mix-blend property so that the cursor comes down the h1 and to avoid jittering because our custom cursor is coming in between h1 and actual cursor */}
       <div ref={cursorRef} className='h-10 w-10 rounded-full bg-white absolute'></div>
    </div>
  )
}

export default App


// or  ye wala code me humne cursor ke attributes ko style me chakge kar diya hai aur joh x y ko ek object ke under liya hai jisse hum bar bar usestate nhi banana padega
// import React, { useState } from "react";
// import "./App.css"; // Add necessary CSS for styling

// const App = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     setCursorPosition({
//       x: event.clientX,
//       y: event.clientY,
//     });
//   };

//   return (
//     <div  onMouseMove={handleMouseMove} className='w-screen h-screen' >
//          <div  className='h-10 w-10 rounded-full bg-black relative' 
//           style={{
//             position: "absolute",
//             left: `${cursorPosition.x}px`,
//             top: `${cursorPosition.y}px`,
//             pointerEvents: "none",
//           }}
//          ></div>
//       </div>
//   );
// };

// export default App;
