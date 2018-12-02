import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { 
  colorPallete, 
  fluidFontSize, 
  defaultGradient } from '../../../assets/css-utils';

const Item = ({ index, record, selectionHandler }) => {
  return(
    <section 
      key={index}
      className={ css( styles.card )} 
      onClick={() => {
        selectionHandler( record ) ;
      }} >

      <section className={ css( styles.field )} >
        <h4 className={ css( styles.label )}>
          Name
        </h4>
        <div className={ css( styles.fieldValue )} >
          {record.name}
        </div>
      </section>

      <section className={ css( styles.field )} >
        <h4 className={ css( styles.label )}>
          Composer
        </h4>
        <div className={ css( styles.fieldValue )} >
          {record.composer}
        </div>
      </section>

      <section className={ css( styles.field )} >
        <h4 className={ css( styles.label )}>
          Track length
        </h4>
        <div className={ css( styles.fieldValue )} >
          {`${Math.round( record.milliseconds / 1000 )} seconds`}
        </div>
      </section>
    </section>
  );
};

const styles = StyleSheet.create({
  card: {
    flexShrink: 0,  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    willChange: 'width',
    cursor: 'pointer',
    flexDirection: 'column',
    overflow: 'hidden',
    
    borderTopRightRadius: '.5em',
    borderBottomLeftRadius: '.5em',
    color: colorPallete.secondaryTextColor,
    backgroundColor: colorPallete.secondaryColor,
    boxShadow: `4px 4px 2px ${colorPallete.secondaryDarkColor}`,
    marginBottom: '.5em',
    
    textTransform: 'capitalize',
    
    transition: 'all .2s ease-in-out',

    ':hover': {
      backgroundColor: colorPallete.secondaryDarkColor,
      color: colorPallete.secondaryTextColor,
    },

    ':focus': {
      backgroundColor: colorPallete.secondaryDarkColor,
      color: colorPallete.secondaryTextColor,
    },
  },

  field: {
    width: '100%',
  },

  fieldValue: {
    ...fluidFontSize( 14, 20 ),
    fontWeight: 'bold',
    marginLeft: '12px',
  },

  label: {
    textTransform: 'capitalize',
    backgroundImage: defaultGradient,
    paddingLeft: '12px',
    width: '100%',
    marginBottom: '0.5em',
    fontWeight: 'bold',
    ...fluidFontSize( 16, 24 ),
  },
});

export default Item;

