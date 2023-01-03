import { createStitches } from '@stitches/react';
import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
  grayA,
  mauveA,
  slateA,
  sageA,
  oliveA,
  sandA,
  tomatoA,
  redA,
  crimsonA,
  pinkA,
  plumA,
  purpleA,
  violetA,
  indigoA,
  blueA,
  skyA,
  mintA,
  cyanA,
  tealA,
  greenA,
  grassA,
  limeA,
  yellowA,
  amberA,
  orangeA,
  brownA,
  bronzeA,
  goldA,
  whiteA,
  blackA,
  grayDark,
  mauveDark,
  slateDark,
  sageDark,
  oliveDark,
  sandDark,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  skyDark,
  mintDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  limeDark,
  yellowDark,
  amberDark,
  orangeDark,
  brownDark,
  bronzeDark,
  goldDark,
  grayDarkA,
  mauveDarkA,
  slateDarkA,
  sageDarkA,
  oliveDarkA,
  sandDarkA,
  tomatoDarkA,
  redDarkA,
  crimsonDarkA,
  pinkDarkA,
  plumDarkA,
  purpleDarkA,
  violetDarkA,
  indigoDarkA,
  blueDarkA,
  skyDarkA,
  mintDarkA,
  cyanDarkA,
  tealDarkA,
  greenDarkA,
  grassDarkA,
  limeDarkA,
  yellowDarkA,
  amberDarkA,
  orangeDarkA,
  brownDarkA,
  bronzeDarkA,
  goldDarkA,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  prefix: 'pl',
  theme: {
    /**
     * 10px = 1rem
     */

    /**
     * Colors
     */

    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...sky,
      ...mint,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...lime,
      ...yellow,
      ...amber,
      ...orange,
      ...brown,
      ...bronze,
      ...gold,

      ...grayA,
      ...mauveA,
      ...slateA,
      ...sageA,
      ...oliveA,
      ...sandA,
      ...tomatoA,
      ...redA,
      ...crimsonA,
      ...pinkA,
      ...plumA,
      ...purpleA,
      ...violetA,
      ...indigoA,
      ...blueA,
      ...skyA,
      ...mintA,
      ...cyanA,
      ...tealA,
      ...greenA,
      ...grassA,
      ...limeA,
      ...yellowA,
      ...amberA,
      ...orangeA,
      ...brownA,
      ...bronzeA,
      ...goldA,

      ...whiteA,
      ...blackA,

      // Semantic colors
      hiContrast: '$slate12',
      loContrast: 'white',
      canvas: 'hsl(0 0% 93%)',
      panel: 'white',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
    },

    /**
     * Spacing
     * 1unit = 0.2rem = 2px
     */

    space: {
      0: '0rem',
      1: '0.2rem',
      2: '0.4rem',
      3: '0.6rem',
      4: '0.8rem',
      5: '1rem',
      6: '1.2rem',
      7: '1.4rem',
      8: '1.6rem',
      9: '1.8rem',
      10: '2rem',
      11: '2.2rem',
      12: '2.4rem',
      13: '2.6rem',
      14: '2.8rem',
      15: '3rem',
      16: '3.2rem',
      17: '3.4rem',
      18: '3.6rem',
      19: '3.8rem',
      20: '4rem',
      21: '4.2rem',
      22: '4.4rem',
      23: '4.6rem',
      24: '4.8rem',
      25: '5rem',
      26: '5.2rem',
      27: '5.4rem',
      28: '5.6rem',
      29: '5.8rem',
      30: '6rem',

      // Semantic spacing
      xs: '0.2rem',
      sm: '0.4rem',
      md: '0.8rem',
      lg: '1.6rem',
      xl: '3.2rem',
      '2xl': '6.4rem',
      '3xl': '12.8rem',
    },

    /**
     * Sizes
     * 1unit = 0.2rem = 2px
     */

    sizes: {
      0: '0rem',
      1: '0.2rem',
      2: '0.4rem',
      3: '0.6rem',
      4: '0.8rem',
      5: '1rem',
      6: '1.2rem',
      7: '1.4rem',
      8: '1.6rem',
      9: '1.8rem',
      10: '2rem',
      11: '2.2rem',
      12: '2.4rem',
      13: '2.6rem',
      14: '2.8rem',
      15: '3rem',
      16: '3.2rem',
      17: '3.4rem',
      18: '3.6rem',
      19: '3.8rem',
      20: '4rem',
      21: '4.2rem',
      22: '4.4rem',
      23: '4.6rem',
      24: '4.8rem',
      25: '5rem',
      26: '5.2rem',
      27: '5.4rem',
      28: '5.6rem',
      29: '5.8rem',
      30: '6rem',
      31: '6.2rem',
      32: '6.4rem',
      33: '6.6rem',
      34: '6.8rem',
      35: '7rem',
      36: '7.2rem',
      37: '7.4rem',
      38: '7.6rem',
      39: '7.8rem',
      40: '8rem',
      41: '8.2rem',
      42: '8.4rem',
      43: '8.6rem',
      44: '8.8rem',
      45: '9rem',
      46: '9.2rem',
      47: '9.4rem',
      48: '9.6rem',
      49: '9.8rem',
      50: '10rem',
      51: '10.2rem',
      52: '10.4rem',
      53: '10.6rem',
      54: '10.8rem',
      55: '11rem',
      56: '11.2rem',
      57: '11.4rem',
      58: '11.6rem',
      59: '11.8rem',
      60: '12rem',
      70: '14rem',
      80: '16rem',
      90: '18rem',
      100: '20rem',
      110: '22rem',
      120: '24rem',
      130: '26rem',
      140: '28rem',
      150: '30rem',
      160: '32rem',
      170: '34rem',
      180: '36rem',
      190: '38rem',
      200: '40rem',

      // Semantic sizes
      full: '100%',
      max: 'max-content',
      min: 'min-content',
      screen: '100vw',
    },

    /**
     * Typography
     */

    fontSizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.2rem',
      '3xl': '2.4rem',
    },

    lineHeights: {
      xs: '1.0',
      sm: '1.1',
      md: '1.2',
      lg: '1.3',
      xl: '1.4',
      '2xl': '1.5',
      '3xl': '1.6',
    },

    fontWeights: {
      light: 300,
      regular: 400,
      bold: 700,
    },

    /**
     * Misc
     */

    radii: {
      xs: '0.4rem',
      sm: '0.6rem',
      md: '0.8rem',
      lg: '1.2rem',
      xl: '1.6rem',
      none: '0',
      round: '50%',
      pill: '9999px',
    },

    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },

    shadows: {
      1: '0 0.1rem 0.2rem rgba(0, 0, 0, 0.05)',
      2: '0 0.2rem 0.4rem rgba(0, 0, 0, 0.05)',
      3: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.05)',
      4: '0 0.8rem 1.6rem rgba(0, 0, 0, 0.05)',
      5: '0 1.6rem 3.2rem rgba(0, 0, 0, 0.05)',
      6: '0 3.2rem 6.4rem rgba(0, 0, 0, 0.05)',
    },

    transitions: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.4s',
    },
  },

  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',

    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },

  utils: {
    /**
     * Size utils
     */
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),
    minW: (value: Stitches.PropertyValue<'minWidth'>) => ({
      minWidth: value,
    }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
      maxWidth: value,
    }),

    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
    }),
    minH: (value: Stitches.PropertyValue<'minHeight'>) => ({
      minHeight: value,
    }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
      maxHeight: value,
    }),

    size: (value: Stitches.ScaleValue<'sizes'>) => ({
      width: value,
      height: value,
    }),

    /**
     * Spacing utils
     */
    p: (value: Stitches.ScaleValue<'space'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<'space'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<'space'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.ScaleValue<'space'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    /**
     * Misc utils
     */
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
      overflowX: value,
    }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
      overflowY: value,
    }),

    bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),

    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...skyDark,
    ...mintDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...orangeDark,
    ...brownDark,
    ...bronzeDark,
    ...goldDark,

    ...grayDarkA,
    ...mauveDarkA,
    ...slateDarkA,
    ...sageDarkA,
    ...oliveDarkA,
    ...sandDarkA,
    ...tomatoDarkA,
    ...redDarkA,
    ...crimsonDarkA,
    ...pinkDarkA,
    ...plumDarkA,
    ...purpleDarkA,
    ...violetDarkA,
    ...indigoDarkA,
    ...blueDarkA,
    ...skyDarkA,
    ...mintDarkA,
    ...cyanDarkA,
    ...tealDarkA,
    ...greenDarkA,
    ...grassDarkA,
    ...limeDarkA,
    ...yellowDarkA,
    ...amberDarkA,
    ...orangeDarkA,
    ...brownDarkA,
    ...bronzeDarkA,
    ...goldDarkA,

    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});

export const globalStyles = globalCss({
  '@import': 'globalStyles.css',
});
