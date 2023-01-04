import {
  CheckboxItem as PrimitiveCheckboxItem,
  ItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import { ComponentProps, ElementRef, forwardRef } from 'react';
import { CSS } from 'stitches.config';

type CheckboxItemPrimitiveProps = ComponentProps<typeof PrimitiveCheckboxItem>;
type CheckboxItemProps = CheckboxItemPrimitiveProps & {
  css?: CSS;
};

export const CheckboxItem = forwardRef<
  ElementRef<typeof PrimitiveCheckboxItem>,
  CheckboxItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <PrimitiveCheckboxItem {...props} ref={forwardedRef}>
      {children}
      <ItemIndicator>
        {props.checked === 'indeterminate' && <DividerHorizontalIcon />}
        {props.checked === true && <CheckIcon />}
      </ItemIndicator>
    </PrimitiveCheckboxItem>
  );
});
