import { gray } from '@radix-ui/colors';
import { styled } from 'stitches.config';

export const Path = styled('path', {
  transition: 'all 100ms ease-out',

  variants: {
    color: {
      transparent: {
        fill: 'transparent',
      },
      white: {
        fill: 'white',
      },
      black: {
        fill: 'black',
      },
      gray7: {
        fill: gray.gray7,
      },
      gray8: {
        fill: gray.gray8,
      },
      gray9: {
        fill: gray.gray9,
      },
      gray10: {
        fill: gray.gray10,
      },
      gray11: {
        fill: gray.gray11,
      },
      gray12: {
        fill: gray.gray12,
      },
    },
  },
});

export const Svg = styled('svg', {});
