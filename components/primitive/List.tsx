import { styled } from 'stitches.config';

const List = styled('ul', {
  w: '$full',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const ListItem = styled('li', {
  w: '$full',
  h: '$20',

  display: 'flex',
  gap: '1.5rem',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '1rem',
  bgColor: 'white',
  br: '$md',

  cursor: 'pointer',
  transition: '$fast',

  '@hover': {
    '&:hover': {
      bgColor: '$gray3',
    },
  },

  variants: {
    active: {
      true: {
        bgColor: '$gray3',
      },
    },
  },
});

export { List, ListItem };
