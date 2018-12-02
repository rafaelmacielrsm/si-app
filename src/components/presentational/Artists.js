import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Table from './artist/Table';
import TableControls from '../ui/shared/TableControls';
import Form from './artist/Form';
import PropTypes from 'prop-types';
import Loader from '../ui/shared/Loader';

class Artists extends React.PureComponent {
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
        name: ''
      }
    };
  }

  render() {
    const { isFetching, resource } = this.props;
    return (
      <div className={ css( styles.container )} >
        { isFetching ? <Loader /> : null }

        <Form 
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

  selectionHandler = ( selectedResource = { id: '', name: '' }) => {
    this.setState({ selectedResource, isShowingForm: true });
  }

  hideFormHandler = () => {
    this.setState({ isShowingForm: false });
  }

  submitDataHandler = ( recordData = { id: '', name: '' }) => {
    if( recordData.id ){
      this.props.updateRecord( recordData.id, recordData.name );
    }else{
      this.props.newRecord( recordData.name );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

Artists.propTypes = {
  onLoadHandler: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  pageChangeHandler: PropTypes.func.isRequired,
  newRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  resourceCount: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  isFetching: PropTypes.bool.isRequired,
  resource: PropTypes.array.isRequired
};

export default Artists;