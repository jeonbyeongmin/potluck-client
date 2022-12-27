import { Text } from 'components/primitive/Text';
import { styled } from 'stitches.config';
import NextLink from 'next/link';

export const Link = styled(NextLink, {
  alignItems: 'center',
  gap: '$1',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate4',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',

  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },

  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },

  [`& ${Text}`]: {
    color: 'inherit',
  },

  variants: {
    variant: {
      ghost: {
        color: 'black',
        textDecorationColor: 'transparent',
      },

      blue: {
        color: '$blue11',
        textDecorationColor: '$blue4',
      },

      subtle: {
        color: '$slate11',
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
