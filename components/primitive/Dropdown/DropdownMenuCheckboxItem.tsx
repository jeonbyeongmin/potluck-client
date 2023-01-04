import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import { ComponentProps, ElementRef, forwardRef } from 'react';
import { CSS } from 'stitches.config';

type DropdownMenuCheckboxItemPrimitiveProps = ComponentProps<
  typeof CheckboxItem
>;
type DropdownMenuCheckboxItemProps = DropdownMenuCheckboxItemPrimitiveProps & {
  css?: CSS;
};

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <CheckboxItem {...props} ref={forwardedRef}>
      {children}
      <ItemIndicator>
        {props.checked === 'indeterminate' && <DividerHorizontalIcon />}
        {props.checked === true && <CheckIcon />}
      </ItemIndicator>
    </CheckboxItem>
  );
});
