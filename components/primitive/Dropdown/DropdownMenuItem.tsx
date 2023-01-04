import { Item } from '@radix-ui/react-dropdown-menu';
import { styled } from 'stitches.config';

export const DropdownMenuItem = styled(Item, {
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: '$1',
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$sm',
  fontWeight: 500,
  justifyContent: 'space-between',
  lineHeight: 1,
  outline: 'none',
  padding: '$2 $3',
  position: 'relative',
  textAlign: 'left',
  textDecoration: 'none',
  userSelect: 'none',
  width: '100%',
  WebkitTapHighlightColor: 'transparent',
});
