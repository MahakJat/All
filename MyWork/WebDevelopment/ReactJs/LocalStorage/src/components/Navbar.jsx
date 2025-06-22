import React from 'react'

const Navbar = ({func}) => {
  return (
    <div className='flex justify-between items-center px-10 py-5'>
        <h1 className='font-bold text-3xl'>Sheriyans</h1>
        <div className='flex gap-8 items-center text-base'>
        <h1>Home</h1>
        <h1>Courses</h1>
        <h1>Request Call</h1>
        <h1>Sign In</h1>
        <button onClick={func}>Mode</button>
        </div>
    </div>
  )
}

export default Navbar