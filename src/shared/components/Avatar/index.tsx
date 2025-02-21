import { AvatarProps } from 'antd';

import { Avatar as AvatarStyled } from './styled';

export const Avatar = (avatarProps: AvatarProps) => {
  return <AvatarStyled {...avatarProps} />;
};
