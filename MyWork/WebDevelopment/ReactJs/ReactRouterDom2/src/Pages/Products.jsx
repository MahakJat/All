import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='h-screen flex justify-center items-center '>
        <h1 className='text-[10vw] font-bold'>Products</h1> 
        <Link to='/products/frontend'>Frontend</Link>
    </div>
  )
}

export default Products