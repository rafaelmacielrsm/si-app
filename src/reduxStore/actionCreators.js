import C from './constants';

export const fetch = () => ({
  type: C.FETCH
});

export const cancelFetch = () => ({
  type: C.CANCEL_FETCH
});

export const setOverViewData = ( data = {}) => ({
  type: C.SET_OVERVIEW_DATA,
  payload: data
});

export const setGenreData = ( data = []) => ({
  type: C.SET_GENRE_DATA,
  payload: data
});

export const updateGenre = ( genre = {}) => ({
  type: C.UPDATE_GENRE_DATA,
  payload: genre
});

export const removeGenre = ( id ) => ({
  type: C.REMOVE_GENRE_DATA,
  payload: id
});

export const setMessage = ( message = '' ) => ({
  type: C.SET_MESSAGE,
  payload: message
});

export const clearMessage = ( message = '' ) => ({
  type: C.CLEAR_MESSAGE,
  payload: message
});