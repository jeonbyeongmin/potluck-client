import { VariantProps } from '@stitches/react';
import { Path } from 'components/icons/common/iconStyles';

type PathVariants = VariantProps<typeof Path>;
type PathColor = Pick<PathVariants, 'color'>;

export interface IconProps {
  size?: number;
  color?: PathColor['color'];
}
