import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { colorPallete, fluidFontSize } from '../../../assets/css-utils';


export const TableHoC = ( TableItem ) => {
  return class Table extends React.PureComponent {
    render() {
      const { dataset, selectionHandler } = this.props;
      return (
        <div className={ css( styles.table )} >
          <section className={ css( styles.listContainer )} >
            {
              dataset.map(( record, index ) => (
                <TableItem 
                  record={record}
                  key={index}
                  selectionHandler={() => {
                    selectionHandler( record ) ;
                  }} />
              ))
            }
          </section>
        </div>
      );
    }
  };
};

const styles = StyleSheet.create({
  table: {
    height: '100%',
    width: '100%',
  },

  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
    padding: '2% 2% 0 2%',

    overflowY: 'scroll',
  },

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

TableHoC.propTypes = {
  dataset: PropTypes.array,
  selectionHandler: PropTypes.func.isRequired,
  TableItem: PropTypes.node,
};