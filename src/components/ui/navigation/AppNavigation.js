import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Albums from '../../presentational/Albums';
import Artists from '../../presentational/Artists';
import Genres from '../../presentational/Genres';
import Home from '../../container/HomeContainer';
import Tracks from '../../presentational/Tracks';
import Navigator from './Navigator';
import { FluidCssRule } from '../../../assets/css-utils';

class AppNavigation extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={ css( styles.container )} >
          <Navigator />

          <Route exact path="/" component={Home} />
          <Route path="/artists" component={Artists} />
          <Route path="/albums" component={Albums} />
          <Route path="/tracks" component={Tracks} />
          <Route path="/genres" component={Genres} />
        </div>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...FluidCssRule( 24, 32, 'paddingTop' ),
    height: '100vh',
    width: '100vw',
  },
});

export default AppNavigation;