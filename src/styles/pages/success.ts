import { styled } from '..'

export const SuccessContainer = styled('section', {
  margin: '0 auto',
  padding: '0 .5rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: { fontSize: '$2xl', color: '$gray100' },

  p: {
    fontSize: '$md',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',

    '@bp1': { fontSize: '$xl' },
  },

  a: {
    marginTop: '5rem',
    color: '$primary',
    textDecoration: 'none',
    fontSize: '$lg',

    display: 'block',

    '&:hover': { color: '$primaryLight', textDecoration: 'underline' },
  },

  '@bp1': { height: 656 },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: { objectFit: 'cover', width: '100%', height: '100%' },
})
