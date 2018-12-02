import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { colorPallete } from '../../../assets/css-utils';

class Messages extends React.PureComponent {
  render() {
    return (
      <div>
        {
          this.props.message
            ? (
              <div className={ css( styles.messages )} >
                <span className={ css( styles.text )} >
                  {this.props.message}
                </span>
              </div>
            )
            : null
        }
      </div>
    );
  }
}

const styles = StyleSheet.create({
  messages: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '56px',
    width: '100%',
    position: 'fixed',
    bottom: '0',
    zIndex: 10,
    backgroundColor: colorPallete.alert,
  },

  text: {
    color: colorPallete.primaryTextColor,
    fontSize: '1em',
  }
});

const mapStateToProps = ( state ) => ({
  message: state.message
});

export default connect( mapStateToProps )( Messages );