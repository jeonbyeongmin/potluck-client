import { ComponentProps, ElementRef, forwardRef } from 'react';
import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { CSS } from 'stitches.config';

type DropdownMenuRadioItemPrimitiveProps = ComponentProps<typeof RadioItem>;
type DropdownMenuRadioItemProps = DropdownMenuRadioItemPrimitiveProps & {
  css?: CSS;
};

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  DropdownMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <RadioItem {...props} ref={forwardedRef}>
      {children}
      <ItemIndicator>
        <CheckIcon />
      </ItemIndicator>
    </RadioItem>
  );
});
