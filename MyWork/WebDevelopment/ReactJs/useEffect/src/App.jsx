import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

const App = () => {
  const imageRef = useRef(null);
  const [xValue, setxValue] = useState(0);
  const [yValue, setyValue] = useState(0);
  
  const changes = ()=>{
      const x = Math.random() * 80; 
      const y = Math.random() * 50; 
      setxValue(x);
      setyValue(y);
    
  }

  useEffect(function(){
      imageRef.current.style.top = yValue +'%'
      imageRef.current.style.left = xValue+'%'
  },[xValue,yValue])//this function run once on loading and when ever the value in the dependency array changes this function runs
  return (
    <div id = "box">
      <img ref={imageRef}  src="https://pbs.twimg.com/media/CIm2QZlUsAA0OUr.jpg" alt="" />
       <button onClick={changes}>Click</button>
    </div>
  )
}

export default App