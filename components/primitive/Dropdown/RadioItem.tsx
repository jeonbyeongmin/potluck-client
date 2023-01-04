import { ComponentProps, ElementRef, forwardRef } from 'react';
import {
  ItemIndicator,
  RadioItem as PrimitiveRadioItem,
} from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { CSS } from 'stitches.config';

type DropdownMenuRadioItemPrimitiveProps = ComponentProps<
  typeof PrimitiveRadioItem
>;
type DropdownMenuRadioItemProps = DropdownMenuRadioItemPrimitiveProps & {
  css?: CSS;
};

export const RadioItem = forwardRef<
  ElementRef<typeof PrimitiveRadioItem>,
  DropdownMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <PrimitiveRadioItem {...props} ref={forwardedRef}>
      {children}
      <ItemIndicator>
        <CheckIcon />
      </ItemIndicator>
    </PrimitiveRadioItem>
  );
});
