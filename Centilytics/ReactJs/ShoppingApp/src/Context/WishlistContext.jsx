import { createContext, useState } from "react";


export const WishlistContext = createContext();

const WishlistContextProvider = (props)=>{
    const [wishList, setWishList] = useState([]);
    const addToWishlist = (product)=>{
         const findProduct = wishList.find((elem)=> elem.id === product.id);
         if(findProduct) return;
         setWishList([...wishList,product]);
    }
    const remove = (productId)=>{
        setWishList((prev)=>
            prev.filter(elem => elem.id !== productId)
        )
    }
   
    return <div>
        <WishlistContext.Provider value={{wishList, remove,addToWishlist}}>
            {props.children}
        </WishlistContext.Provider>
    </div>

}

export default WishlistContextProvider;