import C from './constants';

export const fetch = () => ({
  type: C.FETCH
});

export const cancelFetch = () => ({
  type: C.CANCEL_FETCH
});