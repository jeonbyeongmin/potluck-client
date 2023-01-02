import Logo from 'components/assets/Logo';
import { Avatar } from 'components/Avatar';
import { Link, Text } from 'components/primitive';
import React from 'react';
import { styled } from 'stitches.config';

function Header() {
  return (
    <HeaderWrapper>
      <Link href="/">
        <Logo />
      </Link>
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

  bc: 'white',
});

export default Header;
