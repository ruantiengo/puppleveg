import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      primary: '#9155FD',
      secondary: '#363740',
      info: '#16B1FF',
      success: '#56CA00',
      warning: '#FFB400',
      error: '#FF4C51',
      text: '#3A3541',
      text_secondary: '#3A3541',
      text_gray: '#A4A6B3',
      background: '#F4F5FA',
      background_secondary: '#3A3541',
      unselected_menu: '#9FA2B4'
    }
  },
  media: {
    sm: '(max-width: 450px)',
    md: '(max-width: 760px)',
    lg: '(max-width: 780px)',
    xl: '(max-width: 1024px)'
  }
})

const globalStyles = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Montserrat:wght@300;400;500;600&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&display=swap')"
  ],
  'html, body': {
    margin: '0',
    padding: '0',
    background: '$background',
    fontFamily: 'Montserrat',
    overflow: 'hidden'
  },
  body: {
    boxSizing: 'border-box'
  },
  '@font-face': [
    {
      fontFamily: 'Montserrat',
      src: 'local("Montserrat"), url("fonts/montserrat/Montserrat.ttf")'
    }
  ]
})

globalStyles()
