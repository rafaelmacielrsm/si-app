import C from '../constants';

export const setResource = ( data = []) => ({
  type: C.SET_TRACK_DATA,
  payload: data
});

export const updateResource = ( resource = {}) => ({
  type: C.UPDATE_TRACK_DATA,
  payload: resource
});

export const removeResource = ( id ) => ({
  type: C.REMOVE_TRACK_DATA,
  payload: id
});

export const addResource = ( data ) => ({
  type: C.ADD_TRACK_DATA,
  payload: data
});