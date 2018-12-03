import { fetch, cancelFetch, setOverViewData } from '../actionCreators';
import { 
  setResource, 
  updateResource, 
  removeResource,
  addResource } from '../actionsCreators/albums';
import { 
  getData, 
  updateData,
  destroyRecord,
  createRecord } from '../../libs/albumsApi';
import { showMessage } from './general';

const RESOURCE = {
  redux: 'albums'
};

export const retreiveRecords = ( top = 10, skip = 0, inlineCount = true ) => 
  ( dispatch, getState ) => {
    if( ! getState().isFetching ) dispatch( fetch());

    getData({ top, skip, inlineCount })
      .then(( response ) => {
        if( response.status === 200 ) {
          response.json()
            .then( result => {
              const data = result.value.map( record => (
                { 
                  id: record.Id, 
                  name: record.Name, 
                  artist: record[ 'Artist@xdata.ref' ],
                }));

              dispatch( setResource( data ));
              dispatch( 
                setOverViewData({ [ RESOURCE.redux ]: result[ '@xdata.count' ] }));
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
            let updatedRecord = { 
              id: data.Id, 
              name: data.Name, 
              artist: data[ 'Artist@xdata.ref' ],
            };
      
            dispatch( updateResource( updatedRecord ));
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
            if( getState()[ RESOURCE.redux ].length < 10 ){
              let newRecord = { 
                id: data.Id, 
                name: data.Name, 
                artist: data[ 'Artist@xdata.ref' ],
              };
              dispatch( addResource( newRecord ));
            }
            
            dispatch( countRecords());
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
        dispatch( removeResource( id ));
        dispatch( countRecords());
        dispatch( showMessage( 'Removed Successfully' ));
      }else{
        dispatch( showMessage( 'Deletion Failed' ));
      }
    })
    .catch( err => {
      console.log( err );
    });
};

export const countRecords = () => ( dispatch ) => {
  getData({ count: true })
    .then(( response ) => {
      if( response.status === 200 ){
        response.json()
          .then( data => {
            dispatch( setOverViewData({ [ RESOURCE.redux ]: data }));
          });
      }
    })
    .catch( err => {
      console.log( err );
    });
};