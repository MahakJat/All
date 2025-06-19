import { createSlice } from "@reduxjs/toolkit";



const initialState={
    postList:[],
    isPostLoading:false,
    postError:null,
}

export const FETCH_POSTS = 'post/fetchPost'; //this the the action type create by the redux / fetchPost ka action type 'posts/fetchPosts'
export const FETCH_POSTS_SUCCESS = 'post/fetchPostSuccess';
export const FETCH_POSTS_FAILURE = 'post/fetchPostFailure';

const PostSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
       fetchPost:(state,action)=>{
          state.isPostLoading = true
       },
       fetchPostSuccess:(state,action)=>{
          state.postList = action.payload
          state.isPostLoading = false
       },
        fetchPostFailure:(state,action)=>{
             state.isPostLoading = false;
             state.postError = action.payload;
       },
    }
})

export const {fetchPost,fetchPostFailure,fetchPostSuccess} = PostSlice.actions;

export default PostSlice.reducer


// flow
// dispatch(fetchPosts())
//    ↓
// Reducer updates state: loading=true, error=null
//    ↓
// Epic middleware receives action$ stream
//    ↓
// Epic listens for fetchPosts.type, runs API call
//    ↓
// API call succeeds → dispatch(fetchPostsSuccess(posts))
//    OR
// API call fails → dispatch(fetchPostsFailure(error))
//    ↓
// Reducer updates state accordingly



// comments/fetchComments' is a namespaced action type usually created by Redux Toolkit’s createSlice.
// console.log(commentsSlice.actions.fetchComments.type); 
// Output: 'comments/fetchComments'