import { Card } from 'antd';
import styled from 'styled-components';

export const CardStyled = styled(Card)<{
  $transformX: number;
  $transformY: number;
  $color: string;
}>`
  transform: translate(
    ${({ $transformX }) => $transformX}px,
    ${({ $transformY }) => $transformY}px
  );
  z-index: 400;
  user-select: none;
  box-shadow: 2px 2px 2px ${({ $color }) => $color};
`;
