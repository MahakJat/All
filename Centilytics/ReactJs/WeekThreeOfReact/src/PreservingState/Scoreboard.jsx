import React, { useState } from 'react'
import Counting from './Counting';
import { useEffect } from 'react';
const Scoreboard = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);
    
  return (
   <div className='Scoreboard'>
    <h1>Perserving State</h1>
    {/* When using a ternary operator for conditional rendering, React often treats both branches as the same component position: */}
     <div>
      {isPlayerA ? (
        <Counting person="Taylor" />
      ) : (
        <Counting person="Sarah" />
      )}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
   </div>
   
  );
}
export default Scoreboard