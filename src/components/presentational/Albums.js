import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Albums extends React.PureComponent {
  render() {
    return (
      <div className={ css( styles.container )} >
        Albms
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Albums;