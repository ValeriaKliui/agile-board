import { Avatar as AvatarAntd } from 'antd';
import styled from 'styled-components';

export const Avatar = styled(AvatarAntd)<{ $color?: string }>`
  background-color: ${({ $color }) => $color ?? 'transparent'};
`;
