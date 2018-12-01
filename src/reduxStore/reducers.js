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
}

export default combineReducers({
  isFetching
})