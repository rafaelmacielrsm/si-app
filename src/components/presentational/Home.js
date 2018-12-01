import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import Dashboard from '../presentational/home/Dashboard';
import Loader from '../ui/shared/Loader';

class Home extends React.PureComponent {
  render() {
    return (
      <div className={ css( styles.container )} >
        {
          this.props.isFetching
            ? <Loader />
            : null
        }
        <Dashboard overviewData={this.props.overviewData}/>
      </div>
    );
  }

  componentDidMount(){
    this.props.onLoadHandler();
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  overviewData: PropTypes.shape({
    albums: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    artists: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    genres: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    tracks: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  })
};

export default Home;