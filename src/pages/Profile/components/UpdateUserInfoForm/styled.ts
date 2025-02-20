import { Input as InputAntd } from 'antd';
import styled from 'styled-components';

export const Input = styled(InputAntd)<{ $isEditable: boolean }>`
cursor:inherit !important;
  background:  transparent !important;
  color: inherit !important;
  border: 1px solid ${(p)=>!p.$isEditable && 'transparent'} !important;
  width: auto;
  padding-left: ${(p)=>!p.$isEditable &&'0' }
`;
