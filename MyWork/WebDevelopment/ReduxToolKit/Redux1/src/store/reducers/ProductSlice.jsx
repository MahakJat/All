import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:[
    {
        id : "1",
        price:2345,
        name:"p1"
    },
    {
        id : "2",
        price:23456,
        name:"shampooo"
    }
  ]
}

const productSlice = createSlice({
    name :"product",
    initialState
})

export default productSlice.reducer;