import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { NavLink, withRouter } from 'react-router-dom';
import { colorPallete, fluidFontSize } from '../../../assets/css-utils';

class NavBar extends React.PureComponent {
  render() {
    return (
      <div 
        className={ css( styles.container )} 
        onClick={() => this.props.closeHandler()} >

        <div className={ css( styles.links )} >
          <NavLink 
            activeStyle={styles.activeLink._definition} 
            to='/' 
            exact
            className={ css( styles.link )} >

            home
          </NavLink>

          <NavLink 
            activeStyle={styles.activeLink._definition} 
            to='/artists' 
            className={ css( styles.link )} >

            artists
          </NavLink>
          
          <NavLink 
            activeStyle={styles.activeLink._definition} 
            to='/albums' 
            className={ css( styles.link )} >

            albums
          </NavLink>

          <NavLink 
            activeStyle={styles.activeLink._definition} 
            to='/tracks' 
            className={ css( styles.link )} >

            tracks
          </NavLink>

          <NavLink 
            activeStyle={styles.activeLink._definition} 
            to='/genres' 
            className={ css( styles.link )} >

            genres
          </NavLink>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },

  links: {
    boxShadow: `4px 0px 8px ${colorPallete.primaryDarkColor}`,
  },

  link: {
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

  activeLink: {
    backgroundColor: colorPallete.secondaryLightColor,
  },
});

export default withRouter( NavBar );