import React, { useContext, useState } from 'react'
import { ProductContext } from '../../Context/ProductContext';
import { memo } from 'react';

import { WishlistContext } from '../../Context/WishlistContext';
import Wish from './Wish';
import { CartContext } from '../../Context/CartContext';
import { useEffect } from 'react';
const WishList = memo(
  () => {
    const {addToCart} =useContext(CartContext);
     const {wishList, remove,addToWishlist} = useContext(WishlistContext);   
   
      useEffect(()=>{
         console.log("wishList Mounted");
         return ()=>{
         console.log("wishList  unmounted");
         }
       },[])
   
 return (
   <div className='wishlist'>
   {wishList.length > 0 ? (wishList.map((elem )=> <Wish  key={elem.id} elem={elem} remove={remove} addToCart ={addToCart} />) ): <h3>no items in the wishlist....</h3>}    
   </div>
 )
}
)

export default WishList