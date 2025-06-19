import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = (props)=>{
    const [cartList, setCartList] = useState([]);
    
    const addToCart = (product)=>{
        //add to cart karte time hum joh product ko add kar rahe hai usse quatity ki property de dega aur jab dusri bar usse add karge toh check kar lege ki agar product cart me hai toh product ki quality increase kardege
        const cartAlreadyThere = cartList.find(elem => elem.id === product.id)
        setCartList(prev => {
            if(cartAlreadyThere){
              return  prev.map((element) => element.id === product.id ? {...element ,quantity: element.quantity + 1} : item);
                //  agar item milta hai toh us item me +1 karo aur joh durse item hai as it is return kardo
            }
            else{
              return [...cartList,{...product,quantity:1}]
            }
         }

         )
    }

    const increaseQuantity = (productId)=>{
        setCartList((prevCartList)=>
        prevCartList.map((item) => item.id === productId ? {...item,quantity: item.quantity+1}:item)
        )
    }
    const decreseQuantity = (productId) => {
        setCartList((prevCartList) => {
            const updatedCart = prevCartList.map((item) => {
                if (item.id === productId) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return null;
                    }
                }
                return item;
            });      
            return updatedCart.filter(item => item !== null);
        });
    };

    const removeFromCart = (productId)=>{
        setCartList(prevCart => prevCart.filter(item => item.id !== productId));
    }
   
    
    const totalSum  = ()=>{
        let sum = cartList.reduce((sum,item)=>sum+(item.price * item.quantity),0);
        return sum.toFixed(3);
    }
    return <div>
        <CartContext.Provider value={{cartList, setCartList,addToCart,removeFromCart ,increaseQuantity,decreseQuantity ,totalSum}}>
            {props.children}
        </CartContext.Provider>
    </div>

}

export default CartContextProvider;