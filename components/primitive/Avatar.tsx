import { styled, VariantProps, CSS } from 'stitches.config';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react';
import { Box } from 'components/primitive/Box';
import { Status } from 'components/primitive/Status';

type StatusVariants = VariantProps<typeof Status>;
type StatusColors = Pick<StatusVariants, 'variant'>;

type AvatarVariants = VariantProps<typeof CustomAvatar>;
type AvatarPrimitiveProps = ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS;
    alt?: string;
    src?: string;
    fallback?: ReactNode;
    status?: StatusColors['variant'];
  };

const CustomAvatar = styled(AvatarPrimitive.Root, {
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

const CustomAvatarImage = styled(AvatarPrimitive.Image, {
  display: 'flex',
  objectFit: 'cover',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  size: '$full',
});

const CustomAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: 'uppercase',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
    },
  },

  defaultVariants: {
    size: 'md',
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

export const Avatar = forwardRef<
  ElementRef<typeof CustomAvatar>,
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
          size: '$fit',
        }}
      >
        <CustomAvatar
          {...props}
          ref={forwardedRef}
          size={size}
          variant={variant}
          shape={shape}
        >
          <CustomAvatarImage alt={alt} src={src} />
          <CustomAvatarFallback size={size}>{fallback}</CustomAvatarFallback>
        </CustomAvatar>
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
