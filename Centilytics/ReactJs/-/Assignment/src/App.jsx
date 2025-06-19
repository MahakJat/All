import React, { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPhotos } from './store/reducers/PhotosSlice'
import ImageModalPage from './pages/ImageModalPage'
import SimpleList from './components/SimpleList'
import VirtualizedListGrid from './components/VirtualisedListGrid'
const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(fetchPhotos()); 
  },[])

  return (
    <div className='App'>
      <HomePage/>
      {/* <SimpleList/> */}
      {/* <VirtualizedListGrid/> */}
    </div>
  )
}

export default App
