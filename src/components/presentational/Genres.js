import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Genres extends React.PureComponent {
  render() {
    return (
      <div className={ css( styles.container )} >
        Genres
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Genres;