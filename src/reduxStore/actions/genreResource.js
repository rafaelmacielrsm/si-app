import { 
  setGenreData, 
  fetch, 
  removeGenre,
  updateGenre,
  cancelFetch } from '../actionCreators';
import { 
  getGenreData, 
  updateGenreData,
  deleteGenre,
  newGenre } from '../../libs/apiConnection';
import { showMessage } from './general';
import { countGenres } from './dashboard';

export const retreiveRecords = ( top = 10, skip = 0 ) => ( dispatch, getState ) => {
  if( ! getState().isFetching ) dispatch( fetch());

  getGenreData({ top, skip })
    .then(( response ) => {
      if( response.status === 200 ) return response.json();
    })
    .then(({ value }) => {
      const data = value.map( record => ({ id: record.Id, name: record.Name }));

      dispatch( setGenreData( data ));
      dispatch( cancelFetch());
    })
    .catch( err => {
      dispatch( cancelFetch());
      console.log( err );
    });
};

export const updateRecord = ( id, data ) => ( dispatch, getState ) => {
  if( ! getState().isFetching ) dispatch( fetch());

  updateGenreData( id, data )
    .then(( response ) => {
      if( response.status === 200 ) {
        response.json()
          .then( data => {
            let genre = { id: data.Id, name: data.Name };
      
            dispatch( updateGenre( genre ));
            dispatch( showMessage( 'Update Successful' ));
            dispatch( cancelFetch());
          });
      }else{
        dispatch( showMessage( 'Update Failed' ));
        dispatch( cancelFetch());
      }
    })
    .catch( err => {
      dispatch( cancelFetch());
      console.log( err );
    });
};

export const newRecord = ( data ) => ( dispatch, getState ) => {
  if( ! getState().isFetching ) dispatch( fetch());

  newGenre( data )
    .then(( response ) => {
      if( response.status === 201 ) {
        response.json()
          .then( data => {
            console.log( data );
            
            dispatch( countGenres());
            dispatch( showMessage( 'Created Successfully' ));
            dispatch( cancelFetch());
          });
      }else{
        dispatch( showMessage( 'Creation Failed' ));
        dispatch( cancelFetch());
      }
    })
    .catch( err => {
      dispatch( cancelFetch());
      console.log( err );
    });
};

export const deleteRecord = ( id ) => ( dispatch ) => {
  deleteGenre( id )
    .then(( response ) => {
      if( response.status === 204 ) {
        dispatch( removeGenre( id ));
        dispatch( countGenres());
        dispatch( showMessage( 'Removed Successfully' ));
      }else{
        dispatch( showMessage( 'Deletion Failed' ));
      }
    })
    .catch( err => {
      console.log( err );
    });
};