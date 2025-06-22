import React from 'react'
import TopPartNav from './NavParts/TopPartNav'
import BottomPartNav from './NavParts/BottomPartNav'

const Navbar = () => {
  return (
    <nav className='text-white bg-[#075E55] '>
        <TopPartNav/>
        <BottomPartNav/>
    </nav>
  )
}

export default Navbar