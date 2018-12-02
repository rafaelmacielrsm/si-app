import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colorPallete, defaultBtnStyle } from '../../../assets/css-utils';
import FormInput from '../../ui/shared/FormInput';
import PropTypes from 'prop-types';

class GenreForm extends React.PureComponent {
  constructor( props ) {
    super( props );

    this.state = {
      id: '',
      name: '',
      errors: {
        name: ''
      }
    };
  }

  render() {
    const { isVisible } = this.props;
    return (
      <form 
        onSubmit={this._submitDataHandler}
        className={ 
          css( styles.form, isVisible ? styles.showing : styles.hidding )} >

        <span 
          onClick={() => this.props.hideFormHandler()}
          className={ css( styles.backButton, styles.button )} >

          Back
        </span>

        {
          this.state.id
            ? (
              <span 
                onClick={() => this.props.deleteRecord( this.state.id )}
                className={ css( styles.button, styles.deleteButton )} >

              Delete
              </span>
            )
            : null
        }

        <h3>{ this.state.id ? 'Edit' : 'New' }</h3>

        <FormInput 
          fieldName="name" 
          errorMessage={this.state.errors.name}
          value={ this.state.name }
          onChangeCB={( newValue ) => this.onChangeCallBack( 'name', newValue )}/>        

        <button 
          disabled={this.state.name === ''}
          className={ css( styles.button )} >
          { this.state.id ? 'Save' : 'Create' }
        </button>
      </form>
    );
  }

  componentDidUpdate( prevProps ){
    const { instance: { id, name }, isVisible } = this.props;

    if( prevProps.isVisible === false && isVisible === true ){
      this.setState({ name, id });
    }
  }

  _submitDataHandler = ( ev ) => {
    ev.preventDefault();
    
    const { id, name } = this.state;

    this.props.submitDataHandler({ id, name });
  }

  onChangeCallBack = ( field, newValue ) => {
    this.setState({ [ field ]: newValue });
  }
}

const styles = StyleSheet.create({
  form: {
    height: '90%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.5em',
    position: 'fixed',
    bottom: '0%',
    right: '-100%',
    zIndex: 5,
    
    color: colorPallete.secondaryTextColor,
    backgroundColor: colorPallete.primaryColor,
    boxShadow: `4px 4px 2px ${colorPallete.secondaryDarkColor}`,
    marginBottom: '.5em',

    transition: 'right 1s cubic-bezier(0.77, 0, 0.175, 1);'
  },

  hiding: {
    right: '-100%'
  },

  showing: {
    right: '0%'
  },

  backButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  deleteButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colorPallete.alert,
  },

  button: {
    ...defaultBtnStyle,
  }
});

GenreForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  instance: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  }).isRequired,
  hideFormHandler: PropTypes.func.isRequired,
  submitDataHandler: PropTypes.func.isRequired
};

export default GenreForm;