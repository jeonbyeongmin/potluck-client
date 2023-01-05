import * as Dropdown from 'components/primitive/Dropdown';

import { Avatar, Link, Text } from 'components/primitive';
import { LogoutIcon, UserIcon } from 'components/icons';

import Logo from 'components/assets/Logo';
import { styled } from 'stitches.config';
import useToggle from 'hooks/useToggle';

function Header() {
  const [open, handleOpenChange] = useToggle(false);

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo />
      </Link>

      <Dropdown.Root open={open} onOpenChange={handleOpenChange}>
        <Dropdown.Trigger>
          <Avatar alt="byeongmin" fallback="JB" variant="blue" />
        </Dropdown.Trigger>
        <Dropdown.Content align="end">
          <Dropdown.Item leftElement={<UserIcon size={18} />}>
            <Link href="/profile">
              <Text content="프로필" />
            </Link>
          </Dropdown.Item>
          <Dropdown.Item leftElement={<LogoutIcon size={18} />}>
            <Link href="/logout">
              <Text content="로그아웃" />
            </Link>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    </HeaderContainer>
  );
}

const HeaderContainer = styled('header', {
  w: '$full',
  h: '6rem',
  px: '$10',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  bgColor: 'white',
});

export default Header;
