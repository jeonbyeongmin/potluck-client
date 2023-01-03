import { styled } from 'stitches.config';

export const Status = styled('div', {
  br: '$round',
  flexShrink: 0,

  variants: {
    size: {
      xs: { size: '$5' },
      sm: { size: '$5' },
      md: { size: '$5' },
      lg: { size: '$9' },
      xl: { size: '$9' },
      '2xl': { size: '$9' },
    },

    variant: {
      gray: { bgColor: '$slate7' },
      blue: { bgColor: '$blue9' },
      green: { bgColor: '$green9' },
      yellow: { bgColor: '$yellow9' },
      red: { bgColor: '$red9' },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'gray',
  },
});
