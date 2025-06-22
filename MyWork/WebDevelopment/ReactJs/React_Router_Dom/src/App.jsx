import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Courses from './pages/Courses'
import Services from './pages/Services'
import About from './pages/About'

import Home from './pages/Home'
// react router dom is used to doing routing 
// routing basically means to move from one page to another
const App = () => {
  return (
    <div>
         <Navbar/> 
         <Routes> 
            <Route path='/' element= {<Home/>}></Route> 
            {/* /for the home page  */}
            <Route path='/Courses' element= {<Courses/>}></Route> 
            <Route path='/Services' element= {<Services/>}></Route> 
            <Route path='/About' element= {<About/>}></Route> 
         </Routes>
         <h1>sdfghjk</h1>
    </div>
  )
}

export default App
