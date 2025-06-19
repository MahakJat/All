import React from 'react'
import Virtuallist from './Virtuallist'

const App = () => {
  const list = Array.from({length:100},(_,index)=>index);

  return (
    <div className='app' style={{backgroundColor:'pink'}}>
      <Virtuallist list = {list} height = {500} itemHeight =  {50} containerWidth = {200}/>
    </div>
  )
}

export default App