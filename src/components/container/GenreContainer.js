import { connect } from 'react-redux';
import Genres from '../presentational/Genres';
import { countGenres } from '../../reduxStore/actions/dashboard';
import { 
  retreiveRecords, 
  updateRecord, 
  deleteRecord,
  newRecord } from '../../reduxStore/actions/genreResource';

const mapStateToProps = ( state ) => ({
  resourceCount: state.overviewData.genres,
  isFetching: state.isFetching,
  genres: state.genres
});

const mapDispatchToProps = ( dispatch ) => ({
  onLoadHandler: () => {
    dispatch( retreiveRecords());
    dispatch( countGenres());
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

export default connect( mapStateToProps, mapDispatchToProps )( Genres );