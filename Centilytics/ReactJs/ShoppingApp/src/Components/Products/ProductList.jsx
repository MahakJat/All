import React, { useContext, useState } from 'react'
import axios from 'axios';
import Products from './Products';
import { ProductContext } from '../../Context/ProductContext';
import { CartContext } from '../../Context/CartContext';
import { WishlistContext } from '../../Context/WishlistContext';
const ProductList =  () => {
  const  productListData = useContext(ProductContext); 
  const { addToCart } = useContext(CartContext); 
 const {addToWishlist} = useContext(WishlistContext)
  return (
    <div className='product-list'>
        <h1>Available Products</h1>
       <div className='product-div'>
        {
            productListData.length > 0 ?
            productListData.map((elem)=> <Products elem ={elem} addToCart={addToCart} addToWishlist={addToWishlist}/>)
            : <h3>Fetching products...</h3>
        }
       </div>
    </div>
  )
}

export default ProductList