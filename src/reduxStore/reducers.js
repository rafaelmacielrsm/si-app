import { combineReducers } from 'redux';
import C from './constants';

const isFetching = ( state = false, action ) => {
  switch ( action.type ) {
  case C.FETCH:
    return true;
  case C.CANCEL_FETCH:
    return false;
  default:
    break;
  }
  return state;
};

const overviewData = ( state = {}, action ) => {
  switch ( action.type ) {
  case C.SET_OVERVIEW_DATA:
    return { ...state, ...action.payload };
  
  default:
    return state;
  }
};

export default combineReducers({
  isFetching,
  overviewData
});