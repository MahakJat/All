import React, { createContext, useState } from 'react'

export const PostContextData  =  createContext()//used to create context

const ProductContext = (props) => {
    const [brand, setBrand] = useState('Sheryians')
    const [name, setName] = useState('Mahak')
  return (
    <div>
        <ProductContext.Provider value = {[brand,name]}>  
            //use array to pass data
           {props.children}
        </ProductContext.Provider>
    </div>
  )
}

export default ProductContext