import React from 'react'

const Dp = ({dp}) => {
  return (
    <div className='w-12 h-12 rounded-full  overflow-hidden'>
        <img className='w-full h-full object-cover' src={dp} alt="" />
    </div>
  )
}

export default  Dp
