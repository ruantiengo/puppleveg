import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
     
    },
  },
  media: {
    sm: '(max-width: 425px)',
    md: '(max-width: 760px)',
    lg: '(max-width: 780px)',
    xl: '(max-width: 1024px)'
  }
});

const globalStyles = globalCss({
    
    'html, body': {
      margin: '0',
      padding: '0',
      WebkitFontSmoothing: 'antialiased',
      background: '$background',
      fontFamily: '$body'
    },
    '@font-face': []
  });
  
  globalStyles();