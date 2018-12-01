import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Artists extends React.PureComponent {
  render() {
    return (
      <div className={ css( styles.container )} >
        Artists
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Artists;