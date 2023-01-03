import { styled } from 'stitches.config';
import Logo from 'components/assets/Logo';
import { Avatar } from 'components/Avatar';
import { Link } from 'components/primitive';

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
  px: '$8',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  bgColor: 'white',
});

export default Header;
