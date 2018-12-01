import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Loader extends React.Component {
  render() {
    return (
      <div className={ css( styles.container )} >
        <svg 
          className={css( styles.svgLoader )} 
          viewBox="0 0 128 128" 
          xmlns="http://www.w3.org/2000/svg">

          <path 
            d="M 16 128 V 0" 
            className={ css([ styles.equilizerPath, styles.line1 ])} />

          <path 
            d="M 48 128 V 0" 
            className={ css([ styles.equilizerPath, styles.line2 ])} />

          <path 
            d="M 80 128 V 0" 
            className={ css([ styles.equilizerPath, styles.line3 ])} />

          <path 
            d="M 112 128 V 0" 
            className={ css([ styles.equilizerPath, styles.line4 ])} />
        </svg>
      </div>
    );
  }
}

const generalAnimation = {
  animationName: {
    'from': {
      strokeDashoffset: '128',
      strokeWidth: '8',
    },
    '50%': {
      strokeDashoffset: '0',
      strokeWidth: '24',
    },
    'to': {
      strokeDashoffset: '128',
      strokeWidth: '8',
    }
  },
  animationIterationCount: 'infinite',
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba( 0, 0, 0, .5 )',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  svgLoader: {
    height: 64,
    width: 64,
  },

  equilizerPath: {
    stroke: 'red',
    strokeWidth: 16,
    strokeLinecap: 'butt',
    strokeDasharray: 128,
    strokeDashoffset: 128
  },

  line1: {
    ...generalAnimation,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  },

  line2: {
    ...generalAnimation,
    animationDuration: '3s',
    animationTimingFunction: 'cubic-bezier(0.23, 1, 0.320, 1)',
  },

  line3: {
    ...generalAnimation,
    animationDuration: '3s',
    animationTimingFunction: 'cubic-bezier(0.23, 1, 0.320, 1)',
  },

  line4: {
    ...generalAnimation,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  },
});

export default Loader;