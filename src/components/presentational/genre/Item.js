import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { colorPallete, fluidFontSize } from '../../../assets/css-utils';

const Item = ({ index, record, selectionHandler }) => {
  return(
    <div 
      key={index}
      className={ css( styles.card )} 
      onClick={() => {
        selectionHandler({ id: record.id, name: record.name }) ;
      }} >
      <span>{record.name}</span>
    </div>
  );
};

const styles = StyleSheet.create({
  card: {
    flexShrink: 0,  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    willChange: 'width',
    cursor: 'pointer',
    
    borderTopRightRadius: '.5em',
    borderBottomLeftRadius: '.5em',
    color: colorPallete.secondaryTextColor,
    backgroundColor: colorPallete.secondaryColor,
    boxShadow: `4px 4px 2px ${colorPallete.secondaryDarkColor}`,
    marginBottom: '.5em',
    
    textTransform: 'capitalize',
    ...fluidFontSize( 20, 32 ),
    
    transition: 'all .2s ease-in-out',

    ':hover': {
      backgroundColor: colorPallete.secondaryDarkColor,
      color: colorPallete.secondaryTextColor,
    },

    ':focus': {
      backgroundColor: colorPallete.secondaryDarkColor,
      color: colorPallete.secondaryTextColor,
    }
  }
});

export default Item;

