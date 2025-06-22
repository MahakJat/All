import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 py-4'>
        <h1>Logo</h1>
        <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to = "/aboutus">About Us</Link>
        <span className='cart-count'>Cart items : 0</span>
        </div>
    </nav>
  )
}

export default Navbar