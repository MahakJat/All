import React from "react";
import { Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Navbar from "./Components/Navbar";
import Frontend from "./Pages/Frontend";
import Children from "./Pages/Children";
import SpecificDetails from "./Pages/SpecificDetails";
import { ErrorPage } from "./Pages/ErrorPage";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} /> 
        {/* nested routing */}
        <Route path="/products/frontend" element={<Frontend />} />
       {/* Dynamic routing means aur kuch bhi type kar toh kisi ek particular page pe pahuch jate hai */}
       <Route path="/courses/:id" element={<Children />} />
       <Route path='/products/:id/courses/:id' element={<SpecificDetails />} />
       <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
