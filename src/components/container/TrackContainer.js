import { connect } from 'react-redux';
import PresentationComponent from '../presentational/Tracks';

import { 
  newRecord, 
  updateRecord, 
  deleteRecord,
  retreiveRecords } from '../../reduxStore/actions/tracksResource';

import { retreiveRecords as retriveGenres } 
  from '../../reduxStore/actions/genreResource';

const mapStateToProps = ( state ) => ({
  resourceCount: state.overviewData.tracks,
  isFetching: state.isFetching,
  resource: state.tracks,
  genres: state.genres,
});

const mapDispatchToProps = ( dispatch ) => ({
  onLoadHandler: () => {
    dispatch( retreiveRecords());
    dispatch( retriveGenres( false, false ));
  },

  pageChangeHandler: ( perPage, page ) => {
    dispatch( retreiveRecords( perPage, page * perPage ));
  },

  updateRecord: ( id, name, composer, genre, milliseconds ) => {
    let data = { 
      name, 
      composer, 
      milliseconds: Number.parseInt( milliseconds )
    };

    if( genre ) data[ 'Genre@xdata.ref' ] = genre;

    dispatch( updateRecord( id, data ));
  },

  newRecord: ( name, composer, genre, milliseconds ) => {
    let data = { 
      name, 
      composer, 
      milliseconds: Number.parseInt( milliseconds )
    };

    if( genre ) data[ 'Genre@xdata.ref' ] = genre;

    dispatch( newRecord( data ));
  },

  deleteRecord: ( id ) => {
    dispatch( deleteRecord( id ));
  }
});

export default connect( 
  mapStateToProps, mapDispatchToProps )( PresentationComponent );