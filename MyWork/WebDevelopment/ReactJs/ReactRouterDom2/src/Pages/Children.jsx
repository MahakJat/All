import React from 'react'
import { useParams } from 'react-router-dom'

const Children = () => {
  const data = useParams()
  return (
    <div className='text-[10vw] font-bold h-screen flex justify-center items-center'>{data.id}</div>
  )
}

export default Children