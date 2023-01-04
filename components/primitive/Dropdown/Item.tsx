import { Item as PrimitiveItem } from '@radix-ui/react-dropdown-menu';
import { Flex } from 'components/primitive/Flex';

import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react';
import { CSS, styled } from 'stitches.config';

type ItemVariants = ComponentProps<typeof CustomItem>;
type ItemProps = ItemVariants & {
  css?: CSS;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

const CustomItem = styled(PrimitiveItem, {
  p: '$5 $6',
  br: '$md',
  outline: '0',

  '&:hover': {
    backgroundColor: '$gray2',
  },
});

export const Item = forwardRef<ElementRef<typeof CustomItem>, ItemProps>(
  ({ children, leftElement, rightElement, ...props }, forwaredRef) => {
    console.log(leftElement);
    return (
      <CustomItem ref={forwaredRef} {...props}>
        <Flex align="center" gap={4}>
          {!!leftElement ? leftElement : null}
          {children}
          {!!rightElement ? rightElement : null}
        </Flex>
      </CustomItem>
    );
  }
);
