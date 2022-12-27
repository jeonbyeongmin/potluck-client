import { styled } from 'stitches.config';

const List = styled('ul', {
  listStyle: 'none',
  w: '$full',
  p: 0,
  m: 0,
  fd: 'column',
  jc: 'start',
  ai: 'start',
  gap: '1rem',
});

const ListItem = styled('li', {
  w: '$full',
  h: '4.5rem',

  display: 'flex',
  gap: '1.5rem',
  fd: 'row',
  jc: 'start',
  ai: 'center',
  p: '1rem',
  bc: 'white',
  br: '$3',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    bc: '$gray3',
  },

  variants: {
    active: {
      true: {
        bc: '$gray3',
      },
    },
  },
});

export { List, ListItem };
