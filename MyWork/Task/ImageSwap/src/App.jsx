import React from 'react'
import { useRef } from 'react'

const App = () => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  const swap = ()=>{
    const imgSrc = image1Ref.current.src;
    image1Ref.current.src = image2Ref.current.src;
    image2Ref.current.src = imgSrc;
  }

  return (
    <div className='h-screen flex justify-center items-center box gap-5'>
        <img ref={image1Ref} className='w-64' src="https://i.pinimg.com/474x/a6/05/60/a605608836eebe6a44183ba66c6ca121.jpg" alt="" />
        <button onClick={swap} className='px-4 py-2 rounded-full text-xl font-bold'>Swap</button>
        <img ref={image2Ref} className='w-64' src="https://i.pinimg.com/474x/b4/90/27/b4902731dd214306144faa2c545fff01.jpg" alt="" />
    </div>
  )
}

export default App