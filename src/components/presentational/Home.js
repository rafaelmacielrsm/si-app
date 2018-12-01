import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Home extends React.PureComponent {
  render() {
    return (
      <div className={ css( styles.container )} >
        Home
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;