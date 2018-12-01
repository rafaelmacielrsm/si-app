export const colorPallete = {
  primaryColor: '#212121',
  primaryLightColor: '#484848',
  primaryDarkColor: '#000000',
  secondaryColor: '#6a1b9a',
  secondaryLightColor: '#9c4dcc',
  secondaryDarkColor: '#38006b',
  primaryTextColor: '#ffffff',
  secondaryTextColor: '#ffffff',
}

const t = {
  breakpoint: {
    small: '320',
    medium: '768',
  }
};

export const fluidValue = ( min, max ) => (
  `calc(${min}px + (${max} - ${min}) * 
    (100vw - ${t.breakpoint.small}px) / (${t.breakpoint.medium} - 
    ${t.breakpoint.small}))`
);

export const fluidFontSize = ( min, max ) => ({
  fontSize: min,
  lineHeight: `${min+10}px`,
  '@media screen and (min-width: 320px)':{
    fontSize: fluidValue(min,max),
    lineHeight: fluidValue(min + 10, max + 16),
  },
  '@media screen and (min-width: 768px)':{
    fontSize: max,
    lineHeight: `${max + 16}px`,
  },
})

export const FluidCssRule = ( min, max, rule) => ({
  [rule]: `${max}px`,
  '@media screen and (min-width: 320px)':{
    [rule]: fluidValue(min + 10,max + 16),
  },
  '@media screen and (min-width: 768px)':{
    [rule]: `${max + 16}px`,
  },
})