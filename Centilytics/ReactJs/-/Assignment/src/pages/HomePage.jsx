import React, { useState } from 'react'
import Searchbar from '../components/Searchbar'
import Header from '../components/Header'
import ImageList from '../components/ImageList'
import ImageModalPage from './ImageModalPage'
import VirtualizedList from '../components/VirtualizedList'
import VirtualizedListGrid from '../components/VirtualisedListGrid'
const HomePage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setshowFavorites] = useState(false)

  return (
    <div className='HomePage'>
       <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
       <Header showFavorites={showFavorites} setshowFavorites={setshowFavorites}/>
       {/* <ImageList searchTerm={searchTerm} showFavorites={showFavorites}/> */}
       <VirtualizedListGrid searchTerm={searchTerm} showFavorites={showFavorites}/>
       {/* <VirtualizedList searchTerm={searchTerm} showFavorites={showFavorites} containerHeight = {36} itemHeight={16.5} containerWidth1={40}/> */}
       <ImageModalPage/>
    </div>
  )
}

export default HomePage
