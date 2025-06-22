import React from 'react'

const Image = ({profilePicture}) => {
  return (
   <>
     <img className='object-cover w-[100%] h-[100%] ' src={profilePicture} alt="" />
   </>
  )
}

export default Image