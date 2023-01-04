import {
  Content as PrimitiveContent,
  Portal,
} from '@radix-ui/react-dropdown-menu';
import { ComponentProps, ElementRef, forwardRef } from 'react';
import { CSS, keyframes, styled } from 'stitches.config';

type DropdownMenuContentPrimitiveProps = ComponentProps<
  typeof PrimitiveContent
>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS;
};

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const CustomDropdownMenuContent = styled(PrimitiveContent, {
  minW: '20rem',
  bgColor: 'white',
  br: '$md',
  padding: '$3',
  boxShadow: '$1',
  animationDuration: '500ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  "&[data-side='top']": { animationName: slideUpAndFade },
  "&[data-side='right']": { animationName: slideRightAndFade },
  "&[data-side='bottom']": { animationName: slideDownAndFade },
  "&[data-side='left']": { animationName: slideLeftAndFade },
});

export const Content = forwardRef<
  ElementRef<typeof CustomDropdownMenuContent>,
  DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <Portal>
      <CustomDropdownMenuContent {...props} ref={forwardedRef}>
        {children}
      </CustomDropdownMenuContent>
    </Portal>
  );
});
