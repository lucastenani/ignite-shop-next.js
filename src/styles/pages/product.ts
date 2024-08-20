import { styled } from '..'

export const ProductContainer = styled('section', {
  maxWidth: 1180,
  margin: '0 auto',
  padding: '1rem .5rem',

  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  gap: '2rem',

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 350,
  height: 400,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: { objectFit: 'cover', width: '100%', height: '100%' },
})

export const ProductDetails = styled('article', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  h1: { fontSize: '$xl', color: '$gray300', '@bp1': { fontSize: '$2xl' } },

  span: {
    marginTop: '1rem',
    fontSize: '$xl',
    color: '$primary',

    display: 'block',

    '@bp1': { fontSize: '$2xl' },
  },

  p: {
    marginTop: '1.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
    textAlign: 'center',

    '@bp1': { marginTop: '2.5rem' },
    '@bp2': { textAlign: 'left' },
  },

  button: {
    marginTop: '1rem',
    background: '$primary',
    border: 0,
    width: '100%',
    color: '$white',
    borderRadius: 8,
    padding: '0.75rem',
    cursor: 'pointer',
    fontWeight: 'bold',

    '&:hover': { background: '$primaryLight' },

    '@bp2': { marginTop: 'auto', padding: '1.25rem', fontSize: '$md' },
  },

  '@bp2': { alignItems: 'flex-start', gap: '1rem' },
})
