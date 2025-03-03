import { ButtonStyledProps } from '@shared/components';
import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)<ButtonStyledProps>`
  display: flex;
  margin: ${({ $centered }) => ($centered ? 'auto' : 'inherit')};
`;
