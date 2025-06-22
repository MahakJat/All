//reducer ke under data rahega
//slices me lag lag type ka data rahega jaise productSlice customerSlice adminSlice

import { createSlice } from "@reduxjs/toolkit";

// create slice se slice create hoga 
// createslice ke under  slice ka naam hota hai initialstate joh ki data hota hai aur reducer ke under action hote hai
// slice to jise dete hai reducer jisme data hota hai aur actions

const initialState = {
    value: 0,
  }
  

const counterSlice = createSlice({
    name:"counter",
    initialState,//data
    reducers:{ //under action hoga 
        increment:(state,action)=>{ //about default isme do parameters hote hai ek action aur state hota hai joh 
            // react me inn functions ko pure function bana tha isliye khud hi start aur action de diya react ne 
            // pure function which uses variable and values from its scope only
            // console.log(state)
            state.value+=1
        },
        decrement:(state,action)=>{
            // console.log(state)
            state.value-=1
        }
    }  
})
export const { increment, decrement } = counterSlice.actions; // Export actions
export default counterSlice.reducer; // Export the reducer 