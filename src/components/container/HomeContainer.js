import { connect } from 'react-redux';
import Home from '../presentational/Home';
import { 
  countAllData
} from '../../reduxStore/actions/dashboard';

const mapStateToProps = ( state ) => ({
  overviewData: state.overviewData,
  isFetching: state.isFetching
});

const mapDispatchToProps = ( dispatch ) => ({
  onLoadHandler: () => {
    dispatch( countAllData());
  }
});

export default connect( mapStateToProps, mapDispatchToProps )( Home );