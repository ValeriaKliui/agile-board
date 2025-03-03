import { theme } from 'antd';

import { Avatar as AvatarStyled } from './styled';
import { AvatarProps } from './types';

const { useToken } = theme;

export const Avatar = ({ color, children, ...avatarProps }: AvatarProps) => {
  const { token } = useToken();

  return <AvatarStyled $color={color ?? token.colorPrimary} {...avatarProps} >{children}</AvatarStyled>;
};
