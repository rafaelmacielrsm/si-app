import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { fluidFontSize, colorPallete } from '../../../assets/css-utils';
import NavBar from './NavBar';

class Navigator extends React.PureComponent {
  constructor( props ) {
    super( props );
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <nav className={ css( styles.navbar )} >  
        { this.state.isOpen
          ? (
            <NavBar 
              isOpen={this.state.isOpen} 
              closeHandler={() => this.setState({ isOpen: false })}/>
          )
          : (
            <div 
              class="button button-clear" 
              className={ css( styles.link )} 
              onClick={() => this.setState({ isOpen: ! this.state.isOpen })}>

              <i class="material-icons">
                  menu
              </i>
            </div>
          )
        }
      </nav>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',  
    boxShadow: `4px 0px 8px ${colorPallete.primaryDarkColor}`,
  },

  link: {
    cursor: 'pointer',
    outline: 'none',
    display: 'block',
    color: colorPallete.primaryTextColor,
    backgroundColor: colorPallete.primaryColor,
    textAlign: 'center',
    textTransform: 'capitalize',
    ...fluidFontSize( 24, 32 ),

    ':hover': {
      backgroundColor: colorPallete.secondaryDarkColor,
      color: colorPallete.secondaryTextColor,
    },

    ':focus': {
      color: colorPallete.primaryTextColor,
    }
  },
});

export default Navigator;