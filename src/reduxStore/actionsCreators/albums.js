import C from '../constants';

export const setResource = ( data = []) => ({
  type: C.SET_ALBUM_DATA,
  payload: data
});

export const updateResource = ( resource = {}) => ({
  type: C.UPDATE_ALBUM_DATA,
  payload: resource
});

export const removeResource = ( id ) => ({
  type: C.REMOVE_ALBUM_DATA,
  payload: id
});

export const addResource = ( data ) => ({
  type: C.ADD_ALBUM_DATA,
  payload: data
});