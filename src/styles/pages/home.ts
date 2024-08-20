import { styled } from '..'

export const HomeContainer = styled('section', {
  width: '100%',
  display: 'flex',

  '@bp2': {
    maxWidth: 'calc(100vw - ((100vw - 1180px) /2))',
    marginLeft: 'auto',
  },
})

export const Product = styled('article', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: 350,
  maxHeight: 400,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  footer: {
    padding: '1rem',
    borderRadius: 6,
    background: 'rgba(0,0,0,0.6)',

    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    strong: {
      fontSize: '$md',
      color: '$gray100',
      '@bp2': {
        fontSize: '$lg',
      },
    },

    span: {
      fontSize: '$lg',
      color: '$primary',
      fontWeight: 'bold',
      '@bp2': {
        fontSize: '$xl',
      },
    },

    '@bp2': {
      padding: '2rem',
      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',
    },
  },

  '@bp2': {
    // width: 'auto',
    // minWidth: 540,

    '&:hover': {
      footer: { transform: 'translateY(0%)', opacity: 1 },
    },
  },
})
