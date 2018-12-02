import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fluidFontSize, defaultGradient } from '../../../assets/css-utils';
import PropTypes from 'prop-types';

class FormImput extends React.PureComponent {
  render() {
    const { fieldName, errorMessage } = this.props;

    return (
      <div className={ css( styles.field )} >

        <label className={ css( styles.label )} >
          {fieldName}
        </label>

        <input className={ css( styles.input, errorMessage && styles.hasError )} 
          type="text" 
          value={this.props.value}
          onChange={( ev ) => this.props.onChangeCB( ev.target.value )}/>        

        <span>{errorMessage}</span>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    width: '100%',
  },

  label: {
    textTransform: 'capitalize',
    backgroundImage: defaultGradient,
    paddingLeft: '12px',
    borderTopRightRadius: '1em',
    borderBottomLeftRadius: '1em',
  },

  hasError: {
    borderColor: 'red',

    ':focus':{
      borderColor: 'red',
    }
  },

  input: {
    height: '64',

    color: 'white !important',

    ...fluidFontSize( 24, 32 ),
    
    ':focus':{
      borderColor: 'white',
    }
  },
});

FormImput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  onChangeCB: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormImput;