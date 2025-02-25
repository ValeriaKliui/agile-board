import { Card, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const TextStyled = styled(Text)`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 17px;
`;
export const CardStyled = styled(Card)`
  width: 100%;
  max-width: 300px;
`;
