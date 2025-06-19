// Action Types
export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTER = 'SET_FILTER';
export const SET_SEARCH = 'SET_SEARCH';

// Action Creators
export const fetchImagesRequest = () => {
  return {
    type: FETCH_IMAGES_REQUEST
  };
};

export const fetchImagesSuccess = (images) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: images
  };
};

export const fetchImagesFailure = (error) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error
  };
};

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: id
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};

export const setSearch = (search) => {
  return {
    type: SET_SEARCH,
    payload: search
  };
};

// Thunk Action Creator
export const fetchImages = () => {
  return async (dispatch) => {
    dispatch(fetchImagesRequest());
    try {
      const response = await fetch('https://picsum.photos/v2/list?limit=100');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(fetchImagesSuccess(data));
    } catch (error) {
      dispatch(fetchImagesFailure(error.message));
    }
  };
};