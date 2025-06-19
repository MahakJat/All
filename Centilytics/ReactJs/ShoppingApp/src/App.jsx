import React, { useState } from "react";
import ProductList from "./Components/Products/ProductList";
import "./index.scss";
import CartList from "./Components/Cart/CartList";
import WishList from "./Components/Wishlist/WishList";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  const [isTabOpen, setisTabOpen] = useState("products");
  return (
    <div className="app">
      <Navbar isTabOpen={isTabOpen} setisTabOpen={setisTabOpen} />
      <div className="app-div">
        {isTabOpen === "products" && <ProductList />}
        {isTabOpen === "cartlist" && <CartList />}
        {isTabOpen ==="wishlist" && <WishList />}
      </div>
    </div>
  );
};

export default App;
