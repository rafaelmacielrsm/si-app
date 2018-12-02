import { combineReducers } from 'redux';
import C from './constants';

const message = ( state = '', action ) => {
  switch ( action.type ) {
  case C.SET_MESSAGE:
    return action.payload;

  case C.CLEAR_MESSAGE:
    return action.payload;
  
  default:
    return state;
  }
};

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

const genres = ( state = [], action ) => {
  switch ( action.type ) {
  case C.SET_GENRE_DATA:
    return action.payload;

  case C.REMOVE_GENRE_DATA:
    return state.filter( genre => genre.id !== action.payload );

  case C.UPDATE_GENRE_DATA:
    return state.map( genre => (
      genre.id === action.payload.id
        ? action.payload
        : genre
    ));

  default:
    return state;
  }
};

export default combineReducers({
  isFetching,
  overviewData,
  genres,
  message
});