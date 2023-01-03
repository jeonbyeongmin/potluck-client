import { Text } from 'components/primitive/Text';
import { styled } from 'stitches.config';
import NextLink from 'next/link';

export const Link = styled(NextLink, {
  gap: '$1',
  flexShrink: 0,
  outline: 'none',
  alignItems: 'center',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate4',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',

  [`& ${Text}`]: {
    color: 'inherit',
  },

  variants: {
    variant: {
      ghost: {
        color: 'black',
        textDecorationLine: 'none',
      },

      blue: {
        color: '$blue11',
        textDecoration: 'underline',
        textDecorationColor: '$blue4',
      },

      subtle: {
        color: '$slate11',
        textDecoration: 'underline',
        textDecorationColor: '$slate4',
      },

      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$slate4',

        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate7',
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'ghost',
  },
});
