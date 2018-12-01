import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import DashboardCard from './DashboardCard';

class Dashboard extends React.PureComponent {
  render() {
    const { albums, artists, genres, tracks } = this.props.overviewData;
    return (
      <section className={ css( styles.container )} >
        <DashboardCard 
          toRoute="/albums" 
          title="albums" 
          numberOfRecords={albums}/>

        <DashboardCard 
          toRoute="/artists" 
          title="artists" 
          numberOfRecords={artists}/>

        <DashboardCard 
          toRoute="/genres" 
          title="genres" 
          numberOfRecords={genres}/>

        <DashboardCard 
          toRoute="/tracks" 
          title="tracks" 
          numberOfRecords={tracks}/>

      </section>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

Dashboard.propTypes = {
  overviewData: PropTypes.shape({
    albums: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    artists: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    genres: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    tracks: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  })
};

export default Dashboard;