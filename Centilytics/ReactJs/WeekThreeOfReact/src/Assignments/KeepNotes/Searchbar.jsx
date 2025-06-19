import React, { useContext } from 'react'
import { NotesContext } from './KeepNotesContext/NotesContext';

const Searchbar = () => {
  const {dispatch} = useContext(NotesContext)

  return (
    <div className='Searchbar'>
      <i class="ri-search-line"></i>
       <input type="text" placeholder="Search....." 
       onChange={(e)=>{
          dispatch({type:"search",SearchValue:e.target.value})
         }}
       />
    </div>
  )
}

export default Searchbar;