import { css, styled } from 'stitches.config';

export const panelStyles = css({
  bgColor: '$panel',
  br: '$md',
  boxShadow: 1,
});

export const Panel = styled('div', panelStyles);
