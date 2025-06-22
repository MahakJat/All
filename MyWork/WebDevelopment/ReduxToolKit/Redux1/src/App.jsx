import React from 'react'
import { useSelector } from 'react-redux'
const App = () => {
  const {data}= useSelector((state)=>state.products)//call back function
  const {data:products}= useSelector((state)=>state.products) //data name changed to product
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      {
        products?.map((product) => (
          <div key ={product.id}>
            <span>{product.name}</span> | <button>Delete</button>
            </div>
        ))
      }
    </div>
  )
}

export default App