import React from "react";
import { useEffect } from "react";
import { memo } from "react";

const Cart = memo(
  ({ elem, removeFromCart, increaseQuantity, decreseQuantity }) => {
    return (
      <div className="cart">
        <i
          onClick={() => {
            removeFromCart(elem.id);
          }}
          className="ri-close-large-line"
        ></i>
        <div className="image-container">
          <img src={elem.image} alt="" />
        </div>
        <h3 className="title">{elem.title}</h3>
        <h3>Rs.{(elem.price * elem.quantity).toFixed(2)}</h3>
        <div className="incre-decre-value">
        <i
            onClick={() => {
              decreseQuantity(elem.id);
            }}
            className="dec ri-subtract-line"
          ></i>
         
          <h4>{elem.quantity}</h4>
          <i
            onClick={() => {
              increaseQuantity(elem.id);
            }}
            className="inc ri-add-line"
          ></i>
        </div>
      </div>
    );
  }
);

export default Cart;
