import React from 'react'
import Navbar from './Navbar'
import BottomPart from './BottomPart'

const WhatsApp = ({chatData , onUserClick}) => {
  
  return (
    <div className='w-[27vw] h-[39vw] rounded-xl  overflow-hidden bg-white'>
     <Navbar/>
     <BottomPart  chatData = {chatData} onUserClick={onUserClick}/>
   </div>
  )
}

export default WhatsApp