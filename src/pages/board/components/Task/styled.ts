import { Card } from 'antd';
import styled from 'styled-components';

export const CardStyled = styled(Card)<{ $transformX: number; $transformY: number }>`
  transform: translate(${(p) => p.$transformX}px, ${(p) => p.$transformY}px);
`;
