import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colorPallete, defaultBtnStyle, fluidFontSize } from '../../../assets/css-utils';
import FormInput from '../../ui/shared/FormInput';
import PropTypes from 'prop-types';

class TrackForm extends React.PureComponent {
  constructor( props ) {
    super( props );

    this.state = {
      id: '',
      name: '',
      artist: '',
    };
  }

  render() {
    const { isVisible } = this.props;
    return (
      <div>
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
            value={ this.state.name }
            onChangeCB={( newValue ) => this.onChangeCallBack( 'name', newValue )}/>         
            
          <select 
            onChange={this._selectionHandler}
            value={this.state.artist || ''}
            className={ css( styles.pageInput )} >

            <option value=""></option>

            {
              this.props.artists.map(( artist, index ) => (
                <option 
                  key={index}
                  
                  value={`Artist(${artist.id})`}>
                  {artist.name}
                </option>
              ))
            }
          </select>    

          <button 
            disabled={this.state.name === ''}
            className={ css( styles.button )} >
            { this.state.id ? 'Save' : 'Create' }
          </button>
        </form>
      </div>
    );
  }

  componentDidUpdate( prevProps ){
    const { 
      instance: { id, name, artist }, 
      isVisible } = this.props;

    if( prevProps.isVisible === false && isVisible === true ){
      this.setState({ name, id, artist });
    }
  }

  _submitDataHandler = ( ev ) => {
    ev.preventDefault();

    this.props.submitDataHandler( this.state );
  }

  _selectionHandler = ( ev ) => {
    let selectedValue = ev.target.options[ ev.target.selectedIndex ].value;

    this.setState({ artist: selectedValue });
  }

  onChangeCallBack = ( field, newValue, isNumeric ) => {
    if( isNumeric ){
      let digits = newValue.replace( /\D/g, '' );

      this.setState({ [ field ]: digits });
    }else{
      this.setState({ [ field ]: newValue });
    }
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
  },

  pageInput: {
    margin: '0 .5em',
    height: '40px !important',
    textAlign: 'center',
    color: 'white !important',
    ...fluidFontSize( 16, 24 ),
    fontWeight: 'bold'
  },
});

TrackForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  instance: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  }).isRequired,
  hideFormHandler: PropTypes.func.isRequired,
  submitDataHandler: PropTypes.func.isRequired,
  genres: PropTypes.array,
};

export default TrackForm;