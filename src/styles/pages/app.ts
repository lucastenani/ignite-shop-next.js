import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  '@bp1': {
    justifyContent: 'center',
    minHeight: '100vh',
  },
})

export const Header = styled('header', {
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  padding: '.5rem 0',

  '@bp1': {
    padding: '2rem 0',
  },
})

export const MainContainer = styled('main', { width: '100%' })
