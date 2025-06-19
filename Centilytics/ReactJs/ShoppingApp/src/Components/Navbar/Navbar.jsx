import React from 'react'

const Navbar = ({isTabOpen, setisTabOpen}) => {
  return (
    <div className='navbar'>
        <p onClick={()=>{
          setisTabOpen("products")
        }}>Home</p>
        <p onClick={()=>{
          setisTabOpen("cartlist")
        }}>cart</p>
        <p onClick={()=>{
          setisTabOpen("wishlist")
        }}>wishlist</p>
    </div>
  )
}

export default Navbar