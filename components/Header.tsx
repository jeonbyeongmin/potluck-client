import { Avatar } from 'components/Avatar';
import { Text } from 'components/primitive';
import React from 'react';
import { styled } from 'stitches.config';

function Header() {
  return (
    <HeaderWrapper>
      <Text>Potluck</Text>
      <Avatar alt="byeongmin" fallback="JB" variant="blue" />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled('header', {
  w: '$full',
  h: '6rem',
  px: '$4',

  display: 'flex',
  ai: 'center',
  jc: 'space-between',
});

export default Header;
