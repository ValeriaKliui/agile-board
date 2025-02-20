import { ButtonStyledProps } from '@shared/components';
import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)<ButtonStyledProps>`
  display: flex;
  margin: ${(p) => (p.$centered ? 'auto' : 'inherit')};
`;
