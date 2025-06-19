import { nanoid } from "nanoid";
import { createContext, useReducer, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const initialState = {
    list: [],
  
  };
  const reducer = (state,action)=>{
     if(action.type === "add"){
         return {
            ...state,
            list:[...state.list , { id:nanoid() ,data:action.data }]
         } 
     }
     else if(action.type === 'update'){
        
     }
     else if(action.type === 'delete'){
        const filteredArr = state.list.filter((elem) => elem.id !== action.id);
        return {
          ...state,
          list:filteredArr
        }
     }
     else return state
  }

  const[ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div>
      <TodoContext.Provider value={{state,dispatch}}>{props.children}</TodoContext.Provider>
    </div>
  );
};
export default TodoContextProvider;
