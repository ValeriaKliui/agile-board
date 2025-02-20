import { Input as InputAntd } from 'antd';
import styled from 'styled-components';

export const Input = styled(InputAntd)<{ $isEditable: boolean }>`
  background: #ffffff;
`;
