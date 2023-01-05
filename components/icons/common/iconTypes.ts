import { Path } from 'components/icons/common/iconStyles';
import { VariantProps } from '@stitches/react';

type PathVariants = VariantProps<typeof Path>;
type PathColor = Pick<PathVariants, 'color'>;

export interface IconProps {
  size?: number;
  color?: PathColor['color'];
}
