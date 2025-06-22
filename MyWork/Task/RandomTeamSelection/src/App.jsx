import React, { useRef } from 'react'

const App = () => {
  const arr = [
    {
        name : 'rcb',
        color:'#dc3d3de0',
        bg:'blue'
    },
    {
        name : 'csk',
        color:'yellow',
        bg:'blue'
    },
    {
        name : 'mi',
        color:'blue',
        bg:'gold'
    },{
        name : 'kkr',
        color:'purple',
        bg:'gold'
    }
]
 
const outerBoxRef = useRef(null)
const teamName = useRef(null)

  const random = ()=>{
    const randomIndex = Math.floor(Math.random() * arr.length);
    teamName.current.innerHTML = arr[randomIndex].name;
    teamName.current.style.color = arr[randomIndex].color;
    outerBoxRef.current.style.backgroundColor = arr[randomIndex].bg;

  }

  return (
    <div ref={outerBoxRef}  className='h-screen bg-black flex  flex-col justify-center items-center'>
        <h1 className='text-white capitalize text-[5vw] font-semibold'>Who will win in IPL 2025</h1>
        <button onClick={random} className='capitalize text-white text-lg font-semibold bg-[#0FD090] px-8 mt-4 py-2 rounded-2xl'>Get winner</button>
        <h1 ref={teamName} className='text-white text-[8vw] mt-6 uppercase font-bold'>***</h1>
    </div>
  )
}

export default App