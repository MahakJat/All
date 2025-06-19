  import React from 'react'
  import { useState } from 'react';
  import CountingReset from './CountingReset';
  const ScoreboardReset = () => {
      const [isPlayerA, setIsPlayerA] = useState(true);
      return (
      <div className='ScoreboardReset'>
          <h1>Reseting State</h1>
          <div>
          {isPlayerA &&
            <CountingReset person="Taylor" />
          }
          {!isPlayerA &&
            <CountingReset person="Sarah" />
          }
          <button onClick={() => {
            setIsPlayerA(!isPlayerA);
          }}>
            Next player!
          </button>
        </div>
      </div>
      );
    }

  export default ScoreboardReset