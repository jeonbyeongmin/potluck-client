import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Box, Flex, Text } from 'components/primitive';
import { styled } from 'stitches.config';

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
  return (
    <CardContainer direction="column" gap={2}>
      <ImageContainer>
        <AspectRatio.Root ratio={16 / 10}>
          <Image src={imageURL} alt="Landscape photograph by Tobias Tullius" />
        </AspectRatio.Root>
      </ImageContainer>
      <Flex justify="between">
        <Flex gap={1}>
          {categories.map((category) => (
            <Text size={1} variant="gray">
              {'#' + category}
            </Text>
          ))}
        </Flex>
        <Text size={1} variant="gray">
          {`${author} | ${publishedAt}`}
        </Text>
      </Flex>
      <Text weight="bold">{title}</Text>
      <Text size={2} overflow="hidden" variant="gray">
        {description}
      </Text>
    </CardContainer>
  );
}

const CardContainer = styled(Flex, {
  w: '30rem',
  h: '$full',
});

const ImageContainer = styled(Box, {
  w: '$full',
  h: '$full',
  br: '$4',
  overflow: 'hidden',
});

const Image = styled('img', {
  width: '$full',
  height: '$full',
  objectFit: 'cover',
});

export default Card;
