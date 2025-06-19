import React from 'react'

const Products = ({elem,addToCart,addToWishlist}) => {
  
  return (
    <div className='products'>
        <div className='product-img'>
            <img src={elem.image} alt="" />
        </div>
        <div className='details-div'>
            <h3 className='title'>{elem.title}</h3>
            {/* <div className='details-div-bottom'> */}
            <h3 className='price'>Rs.{elem.price}</h3>
            <p className='description'> {elem.description}</p>
            <div className='btns'>
                <button className='add-to-cart' onClick={()=>{
                  addToCart(elem)
                }}>Add to cart</button>
                <button onClick={()=>{
                  addToWishlist(elem)
                }} className='wishlistbtn'>wishlist</button>
            </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Products