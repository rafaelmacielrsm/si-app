import { setOverViewData } from '../actionCreators';
import { 
  getAlbumData,
  getArtistData,
  getGenreData,
  getTrackData,
} from '../../libs/apiConnection';

const countAlbums = () => ( dispatch ) => {
  getAlbumData({ count: true })
    .then(( response ) => {
      if( response.status === 200 ) return response.json();
    })
    .then( data => {
      dispatch( setOverViewData({ albums: data }));
    })
    .catch( err => {
      //WIP: Error
      console.log( err );
    });
};

const countArtists = () => ( dispatch ) => {
  getArtistData({ count: true })
    .then(( response ) => {
      if( response.status === 200 ) return response.json();
    })
    .then( data => {
      dispatch( setOverViewData({ artists: data }));
    })
    .catch( err => {
      //WIP: Error
      console.log( err );
    });
};
const countGenres = () => ( dispatch ) => {
  getGenreData({ count: true })
    .then(( response ) => {
      if( response.status === 200 ) return response.json();
    })
    .then( data => {
      dispatch( setOverViewData({ genres: data }));
    })
    .catch( err => {
      //WIP: Error
      console.log( err );
    });
};
const countTracks = () => ( dispatch ) => {
  getTrackData({ count: true })
    .then(( response ) => {
      if( response.status === 200 ) return response.json();
    })
    .then( data => {
      dispatch( setOverViewData({ tracks: data }));
    })
    .catch( err => {
      //WIP: Error
      console.log( err );
    });
};

const countAllData = () => ( dispatch ) => {
  dispatch( countAlbums());
  dispatch( countArtists());
  dispatch( countGenres());
  dispatch( countTracks());
};

export {
  countAllData,
  countGenres,
};