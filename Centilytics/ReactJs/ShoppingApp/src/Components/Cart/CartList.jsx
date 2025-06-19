import React, { memo, useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Cart from "./Cart";
import { CartContext } from "../../Context/CartContext";
const CartList = () => {
  
  useEffect(()=>{
    console.log("CartList Mounted");
    return ()=>{
    console.log("CartList  unmounted");

    }
  },[])
 
  const {
    totalSum,
    cartList,
    setCartList,
    removeFromCart,
    increaseQuantity,
    decreseQuantity,
  } = useContext(CartContext);

  
  return (
    <div className="cartlist">
      {cartList.length > 0 ? (
        cartList.map((elem, idx) => (
          <Cart
            elem={elem}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreseQuantity={decreseQuantity}
          />
        ))
      ) : (
        <h3>no items in the cart....</h3>
      )}

{
   cartList.length > 0 ?  (<div className="total-sum">
    <h3>Total sum : {totalSum()}</h3>
    <button>Pay now</button>
 </div>) : <></>
}
      
    </div>
  );
};
export default CartList;
