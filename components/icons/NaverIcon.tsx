import { Path, Svg } from 'components/icons/common/iconStyles';

import { IconProps } from 'components/icons/common/iconTypes';

function NaverIcon({ size = 24, color = 'gray12' }: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.273 12.845L7.376 0H0V24H7.726V11.156L16.624 24H24V0H16.273V12.845Z"
        color={color}
      />
    </Svg>
  );
}

export default NaverIcon;
