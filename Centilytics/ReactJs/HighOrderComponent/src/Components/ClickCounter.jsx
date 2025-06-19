import React, { useState } from 'react'
import withCounter from './withCounter';
const ClickCounter = (props) => { 
  
  const {count ,incrementCount} = props;
  return (
    <div className='clicakCounter'>
         <h3>the value is: {count}</h3>
         <button onClick={incrementCount}>Click Counter</button>
    </div>  
  )
}

export default withCounter(ClickCounter,5);