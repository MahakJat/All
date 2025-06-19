import React from 'react'

const Searchbar = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='Searchbar'>
      <i class="ri-search-line"></i>
       <input type="text" placeholder='Search' 
       value={searchTerm}
        onChange={(e)=>
          setSearchTerm(e.target.value)
        }
       />
    </div>
  )
}

export default Searchbar