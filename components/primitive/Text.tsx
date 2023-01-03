import { styled } from 'stitches.config';

export const Text = styled('span', {
  // Reset
  margin: 0,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
    },

    weight: {
      light: { fontWeight: '$light' },
      regular: { fontWeight: '$regular' },
      bold: { fontWeight: '$bold' },
    },

    color: {
      red: { color: '$red11' },
      crimson: { color: '$crimson11' },
      pink: { color: '$pink11' },
      purple: { color: '$purple11' },
      violet: { color: '$violet11' },
      indigo: { color: '$indigo11' },
      blue: { color: '$blue11' },
      cyan: { color: '$cyan11' },
      teal: { color: '$teal11' },
      green: { color: '$green11' },
      lime: { color: '$lime11' },
      yellow: { color: '$yellow11' },
      orange: { color: '$orange11' },
      gold: { color: '$gold11' },
      bronze: { color: '$bronze11' },
      gray: { color: '$slate11' },
      contrast: { color: '$hiContrast' },
    },

    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },

    maxLines: {
      1: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
      },
      2: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      },
      3: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      },
      4: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
      },
    },
  },

  compoundVariants: [
    {
      color: 'red',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $red11, $crimson11)',
      },
    },
    {
      color: 'crimson',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $crimson11, $pink11)',
      },
    },
    {
      color: 'pink',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $pink11, $purple11)',
      },
    },
    {
      color: 'purple',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $purple11, $violet11)',
      },
    },
    {
      color: 'violet',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $violet11, $indigo11)',
      },
    },
    {
      color: 'indigo',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $indigo11, $blue11)',
      },
    },
    {
      color: 'blue',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $blue11, $cyan11)',
      },
    },
    {
      color: 'cyan',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $cyan11, $teal11)',
      },
    },
    {
      color: 'teal',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $teal11, $green11)',
      },
    },
    {
      color: 'green',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $green11, $lime11)',
      },
    },
    {
      color: 'lime',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $lime11, $yellow11)',
      },
    },
    {
      color: 'yellow',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $yellow11, $orange11)',
      },
    },
    {
      color: 'orange',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $orange11, $red11)',
      },
    },
    {
      color: 'gold',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $gold11, $gold9)',
      },
    },
    {
      color: 'bronze',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $bronze11, $bronze9)',
      },
    },
    {
      color: 'gray',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $gray11, $gray12)',
      },
    },
    {
      color: 'contrast',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $hiContrast, $gray12)',
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    weight: 'regular',
    color: 'contrast',
  },
});
