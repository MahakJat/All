import React, { useContext } from 'react';
import NotesContextProvider from './KeepNotesContext/NotesContext';
import AddNewNotes from './AddNewNotes';
import KeepNotes from './KeepNotes';

const KeepNotesWrapped = () => {
  return (
   <div className='KeepNotesWrapped'>
     <NotesContextProvider>
      <KeepNotes/>
    </NotesContextProvider>
   </div>
  )
}

export default KeepNotesWrapped;