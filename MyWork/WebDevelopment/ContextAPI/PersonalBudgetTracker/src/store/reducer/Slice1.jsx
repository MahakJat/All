import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers:{
    addProduct:(state,action)=>{
        state.products.push(action.payload);
    }}

})