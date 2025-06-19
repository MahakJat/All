import React, { useContext, useState } from "react";
import { NotesContext } from "./KeepNotesContext/NotesContext";

const Notes = ({ note, color,id }) => {
  const { state,dispatch } = useContext(NotesContext);

  const handleChange = (e)=>{
    dispatch({type:'update',note : e.target.value, id:id})
  }

  return (
    <div className="Notes" style={{ backgroundColor: color }}>
      
      <textarea
        className="notewritting"
        name=""
        id=""
        value={note}
        placeholder="Write Note here...."
         onChange={(e)=>{    
               handleChange(e)
         }}
      ></textarea>
       <div className="icons">
      <i onClick={()=>{
    dispatch({type:'delete', id:id})

      }} class="ri-delete-bin-line"></i>
      </div>
     
    </div>
  );
};

export default Notes;
