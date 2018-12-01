import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite/no-important';
import { colorPallete, fluidFontSize } from '../../../assets/css-utils';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, numberOfRecords, toRoute }) => {
  return(
    <Link to={toRoute} className={ css( styles.card )} >
      <span className={ css( styles.title )} >
        {title}  
      </span>

      <span className={ css( styles.amount )} >
        {`${numberOfRecords} ${numberOfRecords > 1 ? 'entries' : 'entry' }`}
      </span>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    height: '20%',
    
    color: colorPallete.secondaryTextColor,
    backgroundColor: colorPallete.secondaryColor,
    boxShadow: `4px 4px 2px ${colorPallete.secondaryDarkColor}`,
    borderTopRightRadius: '1em',
    borderBottomLeftRadius: '1em',
    
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
  },

  title: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: 'bold',
  },

  amount: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfRecords: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]).isRequired,
  toRoute: PropTypes.string.isRequired,
};

export default DashboardCard;
