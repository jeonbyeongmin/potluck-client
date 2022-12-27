import { styled } from 'stitches.config';

export const Status = styled('div', {
  br: '50%',
  fs: 0,

  variants: {
    size: {
      '1': {
        w: 5,
        h: 5,
      },
      '2': {
        w: 9,
        h: 9,
      },
    },
    variant: {
      gray: {
        bc: '$slate7',
      },
      blue: {
        bc: '$blue9',
      },
      green: {
        bc: '$green9',
      },
      yellow: {
        bc: '$yellow9',
      },
      red: {
        bc: '$red9',
      },
    },
  },

  defaultVariants: {
    size: '2',
    variant: 'gray',
  },
});
