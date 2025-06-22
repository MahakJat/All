import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import AboutUs from '../pages/AboutUs'
const RoutesPage = () => {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path='/aboutus' element = {<AboutUs/>}/>
            <Route path='/cart' element ={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default RoutesPage