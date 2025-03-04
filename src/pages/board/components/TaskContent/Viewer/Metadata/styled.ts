import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const PriorityStyled = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

export const Description = styled(Text)`
  font-size: 18px;
`;
