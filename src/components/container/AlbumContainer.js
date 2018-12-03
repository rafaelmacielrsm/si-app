import { connect } from 'react-redux';
import PresentationComponent from '../presentational/Albums';

import { 
  newRecord, 
  updateRecord, 
  deleteRecord,
  retreiveRecords } from '../../reduxStore/actions/albumResource';

import { retreiveRecords as retriveArtists } 
  from '../../reduxStore/actions/artistResource';

const mapStateToProps = ( state ) => ({
  resourceCount: state.overviewData.albums,
  isFetching: state.isFetching,
  resource: state.albums,
  artists: state.artists,
});

const mapDispatchToProps = ( dispatch ) => ({
  onLoadHandler: () => {
    dispatch( retreiveRecords());
    dispatch( retriveArtists( false, false ));
  },

  pageChangeHandler: ( perPage, page ) => {
    dispatch( retreiveRecords( perPage, page * perPage ));
  },

  updateRecord: ( id, name, artist ) => {
    let data = { name };

    if( artist ) data[ 'Artist@xdata.ref' ] = artist;

    dispatch( updateRecord( id, data ));
  },

  newRecord: ( name, artist ) => {
    let data = { name };

    if( artist ) data[ 'Artist@xdata.ref' ] = artist;

    dispatch( newRecord( data ));
  },

  deleteRecord: ( id ) => {
    dispatch( deleteRecord( id ));
  }
});

export default connect( 
  mapStateToProps, mapDispatchToProps )( PresentationComponent );