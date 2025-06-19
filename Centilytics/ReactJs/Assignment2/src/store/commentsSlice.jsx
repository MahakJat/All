import { createSlice } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';

// Initial state
const initialState = {
  comments: [],
  commentsLoading: false,
  commentsError: null,
  selectedComment: null,
};

// Action types
const FETCH_COMMENTS = 'comments/fetchComments';
const FETCH_COMMENTS_SUCCESS = 'comments/fetchCommentsSuccess';
const FETCH_COMMENTS_FAILURE = 'comments/fetchCommentsFailure';
const SELECT_COMMENT = 'comments/selectComment';

// Slice
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    fetchComments: (state) => {
      state.commentsLoading = true;
      state.commentsError = null;
    },
    fetchCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.commentsLoading = false;
    },
    fetchCommentsFailure: (state, action) => {
      state.commentsLoading = false;
      state.commentsError = action.payload;
    },
    selectComment: (state, action) => {
      state.selectedComment = action.payload;
    },
  },
});

// Actions
export const {
  fetchComments,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  selectComment,
} = commentsSlice.actions;

// Epics
const fetchCommentsEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_COMMENTS),
    mergeMap(() =>
      from(axios.get('https://dummyjson.com/comments')).pipe(
        map((response) => fetchCommentsSuccess(response.data.comments)),
        catchError((error) => of(fetchCommentsFailure(error.message)))
      )
    )
  );

export const commentsEpics = [fetchCommentsEpic];

export default commentsSlice.reducer;