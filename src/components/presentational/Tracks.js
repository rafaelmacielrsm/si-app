import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Tracks extends React.PureComponent {
  render() {
    return (
      <div className={ css( styles.container )} >
        Tracks
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tracks; 