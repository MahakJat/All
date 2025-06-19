import React, { useContext } from 'react'
import { PostContextData } from '../Context/ProductContext'
const Navbar = () => {
    
    const [brand, setBrand] = useContext(PostContextData) //getting data from context api
    
    return (
        <div className='flex bg-pink-200 px-7 py-3 items-center justify-between'>
            <h2>{brand}</h2>
            <div className='flex gap-7'>
                <h4>About</h4>
                <h4>About</h4>
                <h4>About</h4>
                <h4>About</h4>
                <button onClick={()=>{
                    setBrand('Sarthak')
                }}>Chnage Brand</button>
            </div>
        </div>
    )
}

export default Navbar