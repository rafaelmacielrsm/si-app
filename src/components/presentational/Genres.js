import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Table from './genre/Table';
import TableControls from '../ui/shared/TableControls';
import Form from './genre/Form';
import PropTypes from 'prop-types';
import Loader from '../ui/shared/Loader';

class Genres extends React.PureComponent {
  constructor( props ) {
    super( props );
    this.state = {
      queryOptions: {
        top: 10,
        currentPage: 0,
      },
      isShowingForm: false,
      selectedGenre: {
        id: '',
        name: ''
      }
    };
  }

  render() {
    const { isFetching, genres } = this.props;
    return (
      <div className={ css( styles.container )} >
        { isFetching ? <Loader /> : null }

        <Form 
          deleteRecord={this.props.deleteRecord}
          submitDataHandler={this.submitDataHandler}
          hideFormHandler={this.hideFormHandler}
          instance={this.state.selectedGenre} 
          isVisible={this.state.isShowingForm}/>
        
        <TableControls 
          pageSelectionHandler={this.accessPageHandler}
          resourceCount={this.props.resourceCount}
          queryOptions={this.state.queryOptions}
          newRecordHandler={this.selectionHandler}/>
        
        <Table dataset={genres} selectionHandler={this.selectionHandler}/>
      </div>
    );
  }

  componentDidMount(){
    this.props.onLoadHandler();
  }

  componentDidUpdate( prevProps, prevState ){
    const { currentPage, top } = this.state.queryOptions;
    
    if( prevState.queryOptions.currentPage !== currentPage ){
      this.props.pageChangeHandler( top, currentPage );
    }
  }

  accessPageHandler = ( newPage ) => {
    this.setState(
      {
        queryOptions: { ...this.state.queryOptions, currentPage: newPage }
      }
    );
  }

  selectionHandler = ( selectedGenre = { id: '', name: '' }) => {
    this.setState({ selectedGenre, isShowingForm: true });
  }

  hideFormHandler = () => {
    this.setState({ isShowingForm: false });
  }

  submitDataHandler = ( genreData = { id: '', name: '' }) => {
    if( genreData.id ){
      this.props.updateRecord( genreData.id, genreData.name );
    }else{
      this.props.newRecord( genreData.name );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

Genres.propTypes = {
  onLoadHandler: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  pageChangeHandler: PropTypes.func.isRequired,
  newRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  resourceCount: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  isFetching: PropTypes.bool.isRequired,
  genres: PropTypes.array.isRequired
};

export default Genres;