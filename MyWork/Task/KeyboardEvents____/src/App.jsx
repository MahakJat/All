import React, { useEffect, useState } from 'react'
const App = () => {
  
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
  
  const motion = (e)=>{
      console.log(e.key);

      // why this code is not working
      // if(e.key === 'ArrowDown' ){
      //   let val = y;
      //   val = val + 10;
      //   setY(val);
      // }else if(e.key === 'ArrowUp'){
      //   let val = y;
      //   val = val - 10;
      //   setY(val);
      // }
      // else if(e.key === 'ArrowLeft' ){
      //   let val = x;
      //   val = val - 10;
      //   setX(val);
      // }
      // else if(e.key === 'ArrowRight' ){
      //   let val = x;
      //   val = val + 10;
      //   setX(val);
      // }
      
      if (e.key === 'ArrowDown' ) {
        setY((prevY) => prevY + 10);  // Using the callback version to get the latest value
      } else if (e.key === 'ArrowUp') {
        setY((prevY) => prevY - 10);  // Same here for y
      } else if (e.key === 'ArrowLeft') {
        setX((prevX) => prevX - 10);  // Using the callback version for x
      } else if (e.key === 'ArrowRight' ) {
        setX((prevX) => prevX + 10);  // Same here for x
      }

  }

  // useEffect(() => {
  //   window.addEventListener('keydown', motion);

  // }, [x,y]); 

  useEffect(() => {
    window.addEventListener('keydown', motion);

 //-----------------
    return () => {
      window.removeEventListener('keydown', motion);
    };
  }, []); 

  return (
    <div className='h-screen bg-[#7ABDEF]'>
        <img className='w-56 absolute' src="https://i.pinimg.com/736x/67/26/40/672640f201300d7da820fa93578a6558.jpg" alt=""  style={
            {left:`${x}%`, top:`${y}%`}
        }/>
    </div>
  )
}

export default App