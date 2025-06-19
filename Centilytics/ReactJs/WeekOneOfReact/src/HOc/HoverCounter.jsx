import React, { useState } from 'react'
import withCounter from './withCounter';
const HoverCounter = (props) => {
  return (
    <div className='hoverCounter'>
        <h3>the value is :{props.count} </h3>
        <button onMouseOver={props.incrementCount}>HoverCounter</button>
    </div>
  )
}

export default withCounter(HoverCounter,10)