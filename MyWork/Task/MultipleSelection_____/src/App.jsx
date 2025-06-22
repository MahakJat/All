
import React, { useRef } from 'react'
import Home from './Home';
const App = () => {
  
  const boxRef = useRef(null);

  const clickHandler = ()=>{
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    document.querySelectorAll('.box').forEach(function(elem){
      elem.style.backgroundColor =  `rgb(${color1},${color2},${color3})`
    })
  //   if(boxRef.current)
  //   boxRef.current.style.backgroundColor = `rgb(${color1},${color2},${color3})`
   }

  return (
    <div className='flex flex-col gap-9 justify-center items-center h-screen'>      
        <div className='flex gap-6'>
          <div className='box w-20 h-20 bg-yellow-400 rounded-full'></div>
          <div className='box w-20 h-20 bg-yellow-900 rounded-full'></div>
          <div className='box w-20 h-20 bg-yellow-800 rounded-full'></div>
          {/* <Home reference = {boxRef}/>
          <Home reference = {boxRef}/>
          <Home reference = {boxRef}/> */}
        </div>

        <button onClick={clickHandler} className='clickHandler px-4 py-2 rounded-2xl bg-black text-white font-semibold'>Change</button>

    </div>

  )
}

export default App

