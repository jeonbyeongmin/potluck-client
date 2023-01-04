import {
  Content as PrimitiveContent,
  Arrow,
  Portal,
} from '@radix-ui/react-dropdown-menu';
import { ComponentProps, ElementRef, forwardRef } from 'react';
import { CSS, styled } from 'stitches.config';

type DropdownMenuContentPrimitiveProps = ComponentProps<
  typeof PrimitiveContent
>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS;
};

const CustomDropdownMenuContent = styled(PrimitiveContent, {
  backgroundColor: '$panel',
  borderRadius: '$1',
  border: '1px solid $panelBorder',
  boxShadow: '0 0 0 1px $panelBorder, 0 4px 24px $panelShadow',
  color: '$panelText',
  minWidth: 200,
  padding: '$2',
  position: 'absolute',
  zIndex: 1,
});

export const Content = forwardRef<
  ElementRef<typeof CustomDropdownMenuContent>,
  DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <Portal>
      <CustomDropdownMenuContent {...props} ref={forwardedRef}>
        {children}
        <Arrow />
      </CustomDropdownMenuContent>
    </Portal>
  );
});
