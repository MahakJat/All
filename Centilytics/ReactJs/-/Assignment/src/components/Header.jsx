import React from 'react'

const Header = ({showFavorites, setshowFavorites}) => {
  return (
   <nav >
     <h1>Photography</h1>
     <h4
     className={showFavorites ? 'active' :''} 
     onClick={()=>{
      setshowFavorites(!showFavorites)
     }}
     >{showFavorites ? 'All Photos'  : 'Favorites'}</h4>
   </nav>
  )
}

export default Header
