import { styled } from 'stitches.config';

export const IconButton = styled('button', {
  // Reset
  padding: '0',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  userSelect: 'none',
  appearance: 'none',
  borderWidth: '0',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  '&::before': { boxSizing: 'border-box' },
  '&::after': { boxSizing: 'border-box' },

  lineHeight: '1',
  outline: 'none',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$hiContrast',
  backgroundColor: '$loContrast',

  '@hover': {
    '&:hover': {
      borderColor: '$slate8',
    },
  },

  '&:active': {
    backgroundColor: '$slate2',
  },

  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$slate6',
  },

  transition: '$fast',

  variants: {
    size: {
      xs: {
        borderRadius: '$xs',
        size: '$8',
      },
      sm: {
        borderRadius: '$sm',
        size: '$9',
      },
      md: {
        borderRadius: '$sm',
        size: '$10',
      },
      lg: {
        borderRadius: '$lg',
        size: '$11',
      },
      xl: {
        borderRadius: '$xl',
        size: '$12',
      },
      '2xl': {
        borderRadius: '$xl',
        size: '$13',
      },
    },

    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3',
          },
        },

        '&:active': {
          backgroundColor: '$slateA4',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slateA4',
          },
      },

      raised: {
        boxShadow:
          '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        '@hover': {
          '&:hover': {
            boxShadow:
              '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
          },
        },

        '&:focus': {
          borderColor: '$slate8',
          boxShadow:
            '0 0 0 1px $colors$slate8, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        },

        '&:active': {
          backgroundColor: '$slate4',
        },
      },
    },

    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },

      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'ghost',
  },
});
