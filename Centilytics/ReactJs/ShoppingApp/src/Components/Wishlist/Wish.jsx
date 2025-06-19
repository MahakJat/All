import React, { memo } from 'react'
import { useEffect } from 'react';
const Wish = memo(({elem,remove,addToCart}) => {
    useEffect(()=>{
              console.log("wish Mounted");
              return ()=>{
              console.log("wish  unmounted");
          
              }
            },[])
  return (
    <div className='wish'>
        <div className='img-div'>
            <img src={elem.image} alt="" />
        </div>
        <h4 className='title'>{elem.title}</h4>
        <h4 className='price'>{elem.price}</h4>
        <div className='btn'>
            <button onClick={()=>{
                addToCart(elem);
                remove(elem.id)
            }} className='move-to-cart'>
                move to cart
            </button>
            <button className='remove' onClick={()=>{remove(elem.id)}}>remove</button>
        </div>
    </div>
  )})


export default Wish