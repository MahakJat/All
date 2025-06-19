import React, { useContext } from "react";
import NotesContextProvider, { NotesContext } from "./KeepNotesContext/NotesContext";
import AddNewNotes from "./AddNewNotes";
import Notes from "./Notes";
import Searchbar from "./Searchbar";

const KeepNotes = () => {
   const {state} = useContext(NotesContext);
  
   const filteredArr = state.Notes.filter((elem) => elem.note.toLowerCase().includes(state.SearchValue.toLowerCase()) )

  return (
    <div className="KeepNotes">
      <AddNewNotes  />
      <div className="searchbar-notes-container">
        <Searchbar />
       <h1>Notes</h1>
        <div className="notes-container">
          {
             filteredArr.map((elem)=> <Notes key={elem.id} note={elem.note || ""} color={elem.color} id = {elem.id}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default KeepNotes;
