import React, { useEffect } from 'react'
import { useState } from 'react';


const Counting = ({person}) => {

    const [score, setScore] = useState(0);

 
  
  return (
    <div className='counting'>
           <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  )
}

export default Counting