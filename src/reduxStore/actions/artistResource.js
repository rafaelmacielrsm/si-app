import { fetch, cancelFetch, setOverViewData } from '../actionCreators';
import { 
  setArtistData, 
  updateArtist, 
  removeArtist,
  addArtist } from '../actionsCreators/artists';
import { 
  getData, 
  updateData,
  destroyRecord,
  createRecord } from '../../libs/artistsApi';
import { showMessage } from './general';

export const retreiveRecords = ( top = 10, skip = 0, inlineCount = true ) => 
  ( dispatch, getState ) => {
    if( ! getState().isFetching ) dispatch( fetch());

    getData({ top, skip, inlineCount })
      .then(( response ) => {
        if( response.status === 200 ) {
          response.json()
            .then( result => {
              const data = result.value.map( record => (
                { id: record.Id, name: record.Name }));

              dispatch( setArtistData( data ));
              dispatch( setOverViewData({ artists: result[ '@xdata.count' ] }));
              dispatch( cancelFetch());
            });
        }
      })
      .catch( err => {
        dispatch( cancelFetch());
        console.log( err );
      });
  };

export const updateRecord = ( id, data ) => ( dispatch, getState ) => {
  if( ! getState().isFetching ) dispatch( fetch());

  updateData( id, data )
    .then(( response ) => {
      if( response.status === 200 ) {
        response.json()
          .then( data => {
            let artist = { id: data.Id, name: data.Name };
      
            dispatch( updateArtist( artist ));
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

  createRecord( data )
    .then(( response ) => {
      if( response.status === 201 ) {
        response.json()
          .then( data => {
            if( getState().artists.length < 10 ){
              let artist = { id: data.Id, name: data.Name };
              dispatch( addArtist( artist ));
            }
            
            dispatch( countArtists());
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
  destroyRecord( id )
    .then(( response ) => {
      if( response.status === 204 ) {
        dispatch( removeArtist( id ));
        dispatch( countArtists());
        dispatch( showMessage( 'Removed Successfully' ));
      }else{
        dispatch( showMessage( 'Deletion Failed' ));
      }
    })
    .catch( err => {
      console.log( err );
    });
};

export const countArtists = () => ( dispatch ) => {
  getData({ count: true })
    .then(( response ) => {
      if( response.status === 200 ){
        response.json()
          .then( data => {
            dispatch( setOverViewData({ artists: data }));
          });
      }
    })
    .catch( err => {
      console.log( err );
    });
};