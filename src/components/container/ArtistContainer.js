import { connect } from 'react-redux';
import Artists from '../presentational/Artists';
// import { countGenres } from '../../reduxStore/actions/dashboard';
import { 
  newRecord, 
  updateRecord, 
  deleteRecord,
  retreiveRecords } from '../../reduxStore/actions/artistResource';

const mapStateToProps = ( state ) => ({
  resourceCount: state.overviewData.artists,
  isFetching: state.isFetching,
  resource: state.artists
});

const mapDispatchToProps = ( dispatch ) => ({
  onLoadHandler: () => {
    dispatch( retreiveRecords());
  },

  pageChangeHandler: ( perPage, page ) => {
    dispatch( retreiveRecords( perPage, page * perPage ));
  },

  updateRecord: ( id, name ) => {
    let data = { name: name };
    dispatch( updateRecord( id, data ));
  },

  newRecord: ( name ) => {
    let data = { name: name };
    dispatch( newRecord( data ));
  },

  deleteRecord: ( id ) => {
    dispatch( deleteRecord( id ));
  }
});

export default connect( mapStateToProps, mapDispatchToProps )( Artists );