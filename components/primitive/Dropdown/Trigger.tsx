import { Trigger as PrimitiveTrigger } from '@radix-ui/react-dropdown-menu';
import { styled } from 'stitches.config';

export const Trigger = styled(PrimitiveTrigger, {
  outline: '0',
  border: '0',
  bgColor: 'transparent',
  cursor: 'pointer',
  userSelect: 'none',
});
