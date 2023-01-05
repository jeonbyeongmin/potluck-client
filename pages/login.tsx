import {
  AppleIcon,
  GithubIcon,
  GoogleIcon,
  KakaoIcon,
  NaverIcon,
} from 'components/icons';
import { Box, Flex, IconButton, Text } from 'components/primitive';

import Logo from 'components/assets/Logo';
import { styled } from 'stitches.config';

function LoginPage() {
  return (
    <Container align="center" justify="center" css={{ h: '100vh' }}>
      <LoginBox direction="column" align="center">
        <Box css={{ mb: '$16' }}>
          <Logo scale={1.8} />
        </Box>
        <Text
          content="로그인해서 동료와 링크를 함께 공유하고, 자신만의 북마크 목록을 만들어보세요!"
          color="gray"
        />
        <Buttons>
          <IconButton
            variant="gray"
            size="xl"
            content={<GoogleIcon size={18} />}
            hoverAnimation="up"
          />
          <IconButton
            variant="gray"
            size="xl"
            content={<GithubIcon size={19} />}
            hoverAnimation="up"
          />
          <IconButton
            variant="gray"
            size="xl"
            content={<NaverIcon size={14} />}
            hoverAnimation="up"
          />
          <IconButton
            variant="gray"
            size="xl"
            content={<KakaoIcon size={19} />}
            hoverAnimation="up"
          />
          <IconButton
            variant="gray"
            size="xl"
            content={<AppleIcon size={20} />}
            hoverAnimation="up"
          />
        </Buttons>

        <Text
          content="로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,"
          color="gray"
          size="sm"
        />
        <Text
          content="서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다."
          color="gray"
          size="sm"
        />
      </LoginBox>
    </Container>
  );
}

const Container = styled(Flex, {
  w: '$full',
  h: '$full',
});

const LoginBox = styled(Flex, {
  br: '$xl',
  w: '$350',
  py: '$30',
  bgColor: 'white',
});

const Buttons = styled(Flex, {
  gap: '$10',
  mt: '$24',
  mb: '$20',
});

export default LoginPage;
