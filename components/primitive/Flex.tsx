import { styled } from 'stitches.config';

export const Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',

  variants: {
    direction: {
      row: {
        fd: 'row',
      },
      column: {
        fd: 'column',
      },
      rowReverse: {
        fd: 'row-reverse',
      },
      columnReverse: {
        fd: 'column-reverse',
      },
    },

    align: {
      start: {
        ai: 'flex-start',
      },
      center: {
        ai: 'center',
      },
      end: {
        ai: 'flex-end',
      },
      stretch: {
        ai: 'stretch',
      },
      baseline: {
        ai: 'baseline',
      },
    },

    justify: {
      start: {
        jc: 'flex-start',
      },
      center: {
        jc: 'center',
      },
      end: {
        jc: 'flex-end',
      },
      between: {
        jc: 'space-between',
      },
    },

    wrap: {
      noWrap: {
        fw: 'nowrap',
      },
      wrap: {
        fw: 'wrap',
      },
      wrapReverse: {
        fw: 'wrap-reverse',
      },
    },

    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
    },

    px: {
      1: {
        px: '$1',
      },
      2: {
        px: '$2',
      },
      3: {
        px: '$3',
      },
      4: {
        px: '$4',
      },
      5: {
        px: '$5',
      },
    },

    py: {
      1: {
        py: '$1',
      },
      2: {
        py: '$2',
      },
      3: {
        py: '$3',
      },
      4: {
        py: '$4',
      },
      5: {
        py: '$5',
      },
    },

    mx: {
      1: {
        mx: '$1',
      },
      2: {
        mx: '$2',
      },
      3: {
        mx: '$3',
      },
      4: {
        mx: '$4',
      },
      5: {
        mx: '$5',
      },
    },

    my: {
      1: {
        my: '$1',
      },
      2: {
        my: '$2',
      },
      3: {
        my: '$3',
      },
      4: {
        my: '$4',
      },
      5: {
        my: '$5',
      },
    },
  },

  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
});
