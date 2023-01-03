import React from 'react';
import { styled, VariantProps, CSS } from 'stitches.config';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Box, Status } from 'components/primitive';

type StatusVariants = VariantProps<typeof Status>;
type StatusColors = Pick<StatusVariants, 'variant'>;

type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS;
    alt?: string;
    src?: string;
    fallback?: React.ReactNode;
    status?: StatusColors['variant'];
  };

export const Avatar = React.forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  AvatarOwnProps
>(
  (
    { alt, src, fallback, size, variant, shape, css, status, ...props },
    forwardedRef
  ) => {
    return (
      <Box
        css={{
          ...css,
          position: 'relative',
          height: 'fit-content',
          width: 'fit-content',
        }}
      >
        <StyledAvatar
          {...props}
          ref={forwardedRef}
          size={size}
          variant={variant}
          shape={shape}
        >
          <StyledAvatarImage alt={alt} src={src} />
          <StyledAvatarFallback size={size}>{fallback}</StyledAvatarFallback>
        </StyledAvatar>
        {status && (
          <Box
            css={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              boxShadow: '0 0 0 3px $colors$loContrast',
              borderRadius: '$round',
              mr: '-3px',
              mb: '-3px',
            }}
          >
            <Status size={size} variant={status} />
          </Box>
        )}
      </Box>
    );
  }
);

const StyledAvatar = styled(AvatarPrimitive.Root, {
  m: '0',
  p: '0',

  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',

  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
  position: 'relative',
  border: 'none',
  fontFamily: 'inherit',
  lineHeight: '1',
  outline: 'none',
  fontWeight: '$regular',
  color: '$hiContrast',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    br: 'inherit',
    boxShadow: 'inset $1',
  },

  variants: {
    size: {
      xs: { size: '$12' },
      sm: { size: '$14' },
      md: { size: '$16' },
      lg: { size: '$18' },
      xl: { size: '$19' },
      '2xl': { size: '$20' },
    },

    variant: {
      hiContrast: {
        backgroundColor: '$hiContrast',
        color: '$loContrast',
      },
      gray: { backgroundColor: '$slate5' },
      tomato: { backgroundColor: '$tomato5' },
      red: { backgroundColor: '$red5' },
      crimson: { backgroundColor: '$crimson5' },
      pink: { backgroundColor: '$pink5' },
      plum: { backgroundColor: '$plum5' },
      purple: { backgroundColor: '$purple5' },
      violet: { backgroundColor: '$violet5' },
      indigo: { backgroundColor: '$indigo5' },
      blue: { backgroundColor: '$blue5' },
      cyan: { backgroundColor: '$cyan5' },
      teal: { backgroundColor: '$teal5' },
      green: { backgroundColor: '$green5' },
      grass: { backgroundColor: '$grass5' },
      brown: { backgroundColor: '$brown5' },
      bronze: { backgroundColor: '$bronze5' },
      gold: { backgroundColor: '$gold5' },
      sky: { backgroundColor: '$sky5' },
      mint: { backgroundColor: '$mint5' },
      lime: { backgroundColor: '$lime5' },
      yellow: { backgroundColor: '$yellow5' },
      amber: { backgroundColor: '$amber5' },
      orange: { backgroundColor: '$orange5' },
    },

    shape: {
      square: { borderRadius: '$md' },
      circle: { borderRadius: '$round' },
    },

    inactive: {
      true: { opacity: '.3' },
    },

    interactive: {
      true: {
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          backgroundColor: 'rgba(0,0,0,.08)',
          opacity: '0',
          pointerEvents: 'none',
          transition: 'opacity 25ms linear',
        },

        '@hover': {
          '&:hover': {
            '&::after': {
              opacity: '1',
            },
          },
        },

        '&[data-state="open"]': {
          '&::after': {
            backgroundColor: 'rgba(0,0,0,.12)',
            opacity: '1',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'gray',
    shape: 'circle',
  },
});

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  display: 'flex',
  objectFit: 'cover',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  size: '$full',
});

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: 'uppercase',

  variants: {
    size: {
      xs: { fontSize: '$5' },
      sm: { fontSize: '$6' },
      md: { fontSize: '$7' },
      lg: { fontSize: '$8' },
      xl: { fontSize: '$9' },
      '2xl': { fontSize: '$10' },
    },
  },

  defaultVariants: {
    size: '2',
  },
});

export const AvatarNestedItem = styled('div', {
  boxShadow: '$1',
  borderRadius: '$round',
});

export const AvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',

  [`& ${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: '-$1',
  },
});
