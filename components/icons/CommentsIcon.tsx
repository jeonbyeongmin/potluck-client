import { Path, Svg } from 'components/icons/common/iconStyles';

import { IconProps } from 'components/icons/common/iconTypes';

function CommentsIcon({ size = 24, color = 'gray12' }: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9 22C8.73478 22 8.48043 21.8946 8.29289 21.7071C8.10536 21.5196 8 21.2652 8 21V18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9ZM5 5V7H19V5H5ZM5 9V11H13V9H5ZM5 13V15H15V13H5Z"
        color={color}
      />
    </Svg>
  );
}

export default CommentsIcon;
