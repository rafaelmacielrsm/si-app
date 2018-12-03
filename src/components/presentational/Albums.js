import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Table from './albums/Table';
import TableControls from '../ui/shared/TableControls';
import Form from './albums/Form';
import PropTypes from 'prop-types';
import Loader from '../ui/shared/Loader';

class Albums extends React.PureComponent {
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
        artist: '',
      }
    };
  }

  render() {
    const { isFetching, resource } = this.props;
    return (
      <div className={ css( styles.container )} >
        { isFetching ? <Loader /> : null }

        <Form 
          artists={this.props.artists}
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
          extraProps={{ artists: this.props.artists }}
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
      artist: '',
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
        recordData.artist
      );
    }else{
      this.props.newRecord( 
        recordData.name,
        recordData.artist
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

Albums.propTypes = {
  onLoadHandler: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  pageChangeHandler: PropTypes.func.isRequired,
  newRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  resourceCount: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  isFetching: PropTypes.bool.isRequired,
  resource: PropTypes.array.isRequired
};

export default Albums;