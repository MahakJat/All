import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductContextProvider = (props)=>{
    const [productListData, setProductListData] = useState([]);

    const getData =async ()=>{
     const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data); //ye array return karta hai
      setProductListData(response.data)
    }
 
 //    runs after the render
    useState(()=>{
       getData();
    },[])
   return <div>
        <ProductContext.Provider value={productListData}> 
         {props.children}
        </ProductContext.Provider>
    </div>
}
export default ProductContextProvider;