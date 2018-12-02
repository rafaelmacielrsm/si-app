import C from '../constants';

export const setArtistData = ( data = []) => ({
  type: C.SET_ARTIST_DATA,
  payload: data
});

export const updateArtist = ( artist = {}) => ({
  type: C.UPDATE_ARTIST_DATA,
  payload: artist
});

export const removeArtist = ( id ) => ({
  type: C.REMOVE_ARTIST_DATA,
  payload: id
});

export const addArtist = ( data ) => ({
  type: C.ADD_ARTIST_DATA,
  payload: data
});