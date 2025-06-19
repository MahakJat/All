import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    isLoadingUser: false,
    selectedUser: null,
    isError: null
};

export const FETCH_USER = "user/fetchUser";

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUser: (state, action) => {
           state.isLoadingUser = true;
        },
        fetchUserSuccess: (state, action) => {
           state.userList = action.payload;
           state.isLoadingUser = false;
        },
        fetchUserError: (state, action) => {
            state.isLoadingUser = false;
            state.isError = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    }
});

export const { 
    fetchUser, 
    fetchUserError, 
    fetchUserSuccess, 
    setSelectedUser 
} = UserSlice.actions;

export default UserSlice.reducer;