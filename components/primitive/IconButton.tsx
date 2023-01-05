import { CSS, styled } from 'stitches.config';
import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react';

type IconButtonVariants = ComponentProps<typeof CustomIconButton>;
type IconButtonProps = IconButtonVariants & {
  css?: CSS;
  content: ReactNode;
};

const CustomIconButton = styled('button', {
  all: 'unset',

  p: '0',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  userSelect: 'none',
  appearance: 'none',
  borderWidth: '0',
  fontFamily: 'inherit',

  outline: 'none',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  color: '$hiContrast',
  bgColor: '$loContrast',

  '&:disabled': {
    pointerEvents: 'none',
    bgColor: 'transparent',
    color: '$slate6',
  },

  transition: '$fast',

  variants: {
    size: {
      xs: { size: '$14' },
      sm: { size: '$16' },
      md: { size: '$18' },
      lg: { size: '$20' },
      xl: { size: '$22' },
      '2xl': { size: '$24' },
    },

    br: {
      xs: { br: '$xs' },
      sm: { br: '$sm' },
      md: { br: '$md' },
      lg: { br: '$lg' },
      xl: { br: '$xl' },
      '2xl': { br: '$2xl' },
      '3xl': { br: '$3xl' },
      round: { br: '$round' },
    },

    hoverAnimation: {
      none: {
        '@hover': {
          '&:hover': {
            transform: 'none',
          },
        },
      },
      rotate: {
        '@hover': {
          '&:hover': {
            transform: 'rotate(360deg)',
          },
        },
      },
      scale: {
        '@hover': {
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
      up: {
        '@hover': {
          '&:hover': {
            transform: 'translateY(-3px)',
          },
        },
      },
      down: {
        '@hover': {
          '&:hover': {
            transform: 'translateY(3px)',
          },
        },
      },
    },

    shadow: {
      none: { boxShadow: 'none' },
      1: { boxShadow: '$1' },
    },

    variant: {
      gray: {
        bgColor: '$slateA3',

        '@hover': {
          '&:hover': {
            bgColor: '$slateA4',
          },
        },

        '&:active': {
          bgColor: '$slateA5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            bgColor: '$slateA4',
          },
      },

      ghost: {
        bgColor: 'transparent',
        borderWidth: '0',
        '@hover': {
          '&:hover': {
            bgColor: '$slateA3',
          },
        },

        '&:active': {
          bgColor: '$slateA4',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            bgColor: '$slateA4',
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
          bgColor: '$slate4',
        },
      },
    },

    state: {
      active: {
        bgColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          bgColor: '$slate4',
        },
      },

      waiting: {
        bgColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          bgColor: '$slate4',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    br: 'round',
    variant: 'ghost',
  },
});

export const IconButton = forwardRef<
  ElementRef<typeof CustomIconButton>,
  IconButtonProps
>(({ content, ...props }, forwardedRef) => {
  return (
    <CustomIconButton ref={forwardedRef} {...props}>
      {content}
    </CustomIconButton>
  );
});
