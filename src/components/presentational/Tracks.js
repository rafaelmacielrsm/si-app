import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Table from './tracks/Table';
import TableControls from '../ui/shared/TableControls';
import Form from './tracks/Form';
import PropTypes from 'prop-types';
import Loader from '../ui/shared/Loader';

class Tracks extends React.PureComponent {
  constructor( props ) {
    super( props );
    this.state = {
      queryOptions: {
        top: 10,
        currentPage: 0,
      },

      isShowingForm: false,
      
      selectedResource: {
        id: '',
        name: '',
        composer: '',
        milliseconds: '',
        genre: '',
      }
    };
  }

  render() {
    const { isFetching, resource } = this.props;
    return (
      <div className={ css( styles.container )} >
        { isFetching ? <Loader /> : null }

        <Form 
          genres={this.props.genres}
          deleteRecord={this.props.deleteRecord}
          submitDataHandler={this.submitDataHandler}
          hideFormHandler={this.hideFormHandler}
          instance={this.state.selectedResource} 
          isVisible={this.state.isShowingForm}/>  

        <TableControls 
          pageSelectionHandler={this.accessPageHandler}
          resourceCount={this.props.resourceCount}
          queryOptions={this.state.queryOptions}
          newRecordHandler={this.selectionHandler}/> 

        <Table 
          dataset={resource} 
          selectionHandler={this.selectionHandler}/>
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

  selectionHandler = ( selectedResource ) => {
    let emptyInstance = {
      id: '',
      name: '',
      composer: '',
      milliseconds: '',
      genre: '',
    };

    this.setState({ 
      selectedResource: selectedResource ? selectedResource : emptyInstance, 
      isShowingForm: true });
  }

  hideFormHandler = () => {
    this.setState({ isShowingForm: false });
  }

  submitDataHandler = ( recordData ) => {
    if( recordData.id ){
      this.props.updateRecord( 
        recordData.id, 
        recordData.name,
        recordData.composer,
        recordData.genre,
        recordData.milliseconds,
      );
    }else{
      this.props.newRecord( 
        recordData.name,
        recordData.composer,
        recordData.genre,
        recordData.milliseconds,
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

Tracks.propTypes = {
  onLoadHandler: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  pageChangeHandler: PropTypes.func.isRequired,
  newRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  resourceCount: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  isFetching: PropTypes.bool.isRequired,
  resource: PropTypes.array.isRequired
};

export default Tracks;