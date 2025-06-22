import React from 'react'

const Home = ({reference}) => {
  return (
    <div ref={reference} className='box w-20 h-20 bg-yellow-400 rounded-full'></div>
  )
}

export default Home