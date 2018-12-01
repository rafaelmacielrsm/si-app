import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initializeReduxStore from './reduxStore';
import AppNavigation from './components/ui/navigation/AppNavigation';

const reduxStore = initializeReduxStore();

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
