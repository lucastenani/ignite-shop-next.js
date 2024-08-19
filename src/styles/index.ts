import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  css,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',

      primary: '#00875F',
      primaryLight: '#00B37E',
    },
  },
  media: {
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
  },
})
