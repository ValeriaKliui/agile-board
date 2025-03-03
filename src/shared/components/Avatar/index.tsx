import { Avatar as AvatarStyled } from './styled';
import { AvatarProps } from './types';

export const Avatar = ({ color, ...avatarProps }: AvatarProps) => {
  return <AvatarStyled $color={color} {...avatarProps} />;
};
