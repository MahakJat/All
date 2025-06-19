import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import ProductContextProvider from './Context/ProductContext.jsx'
import CartContextProvider from './Context/CartContext.jsx'
import  WishlistContextProvider  from './Context/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
   <ProductContextProvider>
      <WishlistContextProvider>
    <CartContextProvider>
       <App />
    </CartContextProvider>
    </WishlistContextProvider>
    </ProductContextProvider>
   
  // </StrictMode>,
)
