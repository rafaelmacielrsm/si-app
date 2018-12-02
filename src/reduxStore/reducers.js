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

  case C.ADD_GENRE_DATA:
    return [ ...state, action.payload ];

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

const artists = ( state = [], action ) => {
  switch ( action.type ) {
  case C.SET_ARTIST_DATA:
    return action.payload;

  case C.ADD_ARTIST_DATA:
    return [ ...state, action.payload ];

  case C.REMOVE_ARTIST_DATA:
    return state.filter( artist => artist.id !== action.payload );

  case C.UPDATE_ARTIST_DATA:
    return state.map( artist => (
      artist.id === action.payload.id
        ? action.payload
        : artist
    ));

  default:
    return state;
  }
};

const tracks = ( state = [], action ) => {
  switch ( action.type ) {
  case C.SET_TRACK_DATA:
    return action.payload;

  case C.ADD_TRACK_DATA:
    return [ ...state, action.payload ];

  case C.REMOVE_TRACK_DATA:
    return state.filter( track => track.id !== action.payload );

  case C.UPDATE_TRACK_DATA:
    return state.map( track => (
      track.id === action.payload.id
        ? action.payload
        : track
    ));

  default:
    return state;
  }
};

export default combineReducers({
  isFetching,
  overviewData,
  message,
  genres,
  artists,
  tracks
});