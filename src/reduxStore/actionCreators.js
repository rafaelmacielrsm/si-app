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