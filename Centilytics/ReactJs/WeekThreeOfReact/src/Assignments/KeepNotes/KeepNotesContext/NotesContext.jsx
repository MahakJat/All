import { nanoid } from "nanoid";
import React, { createContext, useReducer, useEffect } from "react";

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  // Initial state
  const initialState = {
    Notes: [],
    SearchValue:""
  };

  // state is the the object which initial have Notes:[] //const initialState = {
  //   Notes: [],
  // };
 
  const reducer = (state,action) =>{
     if(action.type === 'add'){
       return {
        ...state, // state ke sare cheeze wahi ki wasi raku as ...prev in the useState
        Notes:[...state.Notes,{color:action.color , note:action.note ,id:nanoid()}] //update notes
       }
     }
     else if(action.type === 'update'){
          const updatedNotes = state.Notes.map((elem)=>
            elem.id === action.id ? {...elem,  note:action.note } : elem //destructure elem and update the value of the note
          )
        return{
          ...state,
           Notes:updatedNotes
        }
     }
     else if(action.type === 'delete'){
      const updatedNotes = state.Notes.filter((elem) => elem.id !== action.id)
       return {
        ...state,
        Notes:updatedNotes
       }
     }
     else if(action.type === 'search'){
        return {
          ...state,
          SearchValue : action.SearchValue
        }
     }
     else return state;
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotesContext.Provider value={{state,dispatch}}>{props.children}</NotesContext.Provider>
  );
};

export default NotesContextProvider;
