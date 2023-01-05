import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import { Box, Flex, Text } from 'components/primitive';
import { CommentsIcon, DotsVerticalIcon } from 'components/icons';

import { Avatar } from 'components/primitive/Avatar';
import { IconButton } from 'components/primitive/IconButton';
import { styled } from 'stitches.config';
import useHover from 'hooks/useHover';

interface CardPrpos {
  title: string;
  description: string;
  categories: string[];
  author?: string;
  publishedAt?: string;
  imageURL?: string;
}

function Card({
  title = "‘올라운더' 커뮤니케이션 디자이너가 전하는 마이리얼트립의 가치",
  description = '임은지 마이리얼트립 커뮤니케이션 디자이너 인터뷰  디자이너',
  categories = ['디자인', '인터뷰'],
  author = '임은지',
  publishedAt = '2021.08.31',
  imageURL = 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
}: CardPrpos) {
  const { isHover, onMouseOut, onMouseOver } = useHover();

  return (
    <Container
      direction="column"
      gap={2}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <ImageContainer>
        <AspectRatio.Root ratio={16 / 10}>
          <Image src={imageURL} alt="Landscape photograph by Tobias Tullius" />
        </AspectRatio.Root>
      </ImageContainer>

      <MetaContainer justify="between">
        <CategoriesWrapper gap={1}>
          {categories.map((category) => (
            <Text size="xs" color="purple">
              {`#${category}`}
            </Text>
          ))}
        </CategoriesWrapper>
        <Text size="xs" color="gray">
          {`${author} | ${publishedAt}`}
        </Text>
      </MetaContainer>

      <Flex direction="column" gap={1}>
        <Flex>
          <Text weight="bold" maxLines={2}>
            {title}
          </Text>
        </Flex>
        <Text size="xs" maxLines={1} color="gray">
          {description}
        </Text>
      </Flex>

      <Flex align="center">
        <ProfileContainer align="center" gap={1}>
          <Avatar src="https://i.pravatar.cc/200" />
          <Text size="xs" color="gray">
            전병민
          </Text>
        </ProfileContainer>
        <Flex gap={1}>
          <IconButton>
            <CommentsIcon
              size={20}
              color={isHover ? 'gray10' : 'transparent'}
            />
          </IconButton>
          <IconButton>
            <DotsVerticalIcon
              size={20}
              color={isHover ? 'gray10' : 'transparent'}
            />
          </IconButton>
        </Flex>
      </Flex>
    </Container>
  );
}

const Container = styled(Flex, {
  w: '30rem',
  us: 'none',
});

const ImageContainer = styled(Box, {
  w: '$full',

  br: '$4',
  overflow: 'hidden',
});

const Image = styled('img', {
  w: '$full',
  h: '$full',
  objectFit: 'cover',
});

const MetaContainer = styled(Flex, {
  w: '$full',
});

const CategoriesWrapper = styled(Flex, {});

const ProfileContainer = styled(Flex, {
  w: '$full',
  mt: '$1',
});

export default Card;
