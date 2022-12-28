import React, { useMemo } from 'react';
import { Link, List, ListItem, Text } from 'components/primitive';
import { styled } from 'stitches.config';
import { Avatar } from 'components/Avatar';
import { useRouter } from 'next/router';

export function Nav() {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <NavWrapper>
      <List>
        <Link href={'/parties/1'}>
          <ListItem active={router.asPath === '/parties/1'}>
            <Avatar size="2" shape="square" src="https://i.pravatar.cc/300" />
            <Text size={'2'}>프론트엔드 정보</Text>
          </ListItem>
        </Link>
        <Link href={'/parties/2'}>
          <ListItem active={router.asPath === '/parties/2'}>
            <Avatar size="2" shape="square" src="https://i.pravatar.cc/300" />
            <Text size={'2'}>파티 이름 입니다</Text>
          </ListItem>
        </Link>
        <Link href={'/parties/3'}>
          <ListItem active={router.asPath === '/parties/3'}>
            <Avatar size="2" shape="square" src="https://i.pravatar.cc/300" />
            <Text size={'2'}>파티 이름 입니다</Text>
          </ListItem>
        </Link>
        <Link href={'/parties/4'}>
          <ListItem active={router.asPath === '/parties/4'}>
            <Avatar size="2" shape="square" src="https://i.pravatar.cc/300" />
            <Text size={'2'}>파티 이름 입니다</Text>
          </ListItem>
        </Link>
        <Link href={'/parties/5'}>
          <ListItem active={router.asPath === '/parties/5'}>
            <Avatar size="2" shape="square" src="https://i.pravatar.cc/300" />
            <Text size={'2'}>파티 이름 입니다</Text>
          </ListItem>
        </Link>
      </List>
    </NavWrapper>
  );
}

const NavWrapper = styled('nav', {
  display: 'flex',
  gap: '1rem',
  fd: 'column',
  jc: 'start',
  ai: 'start',
  px: '1rem',
  h: 'calc(100vh - 6rem)',
  w: '24rem',
  bc: 'white',
  minH: '50rem',
});
