import React from 'react'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'
import Veggeis from './Implementation/Veggies'
import Fruits from './Implementation/Fruits'

const App = () => {

  return (
    <div className='app'>
        {/* <ClickCounter/>
        <HoverCounter/> */}
       <div className='fruits-veggies'>
       <Veggeis/>
       <Fruits/>
       </div>
    </div>
  )
}

export default App