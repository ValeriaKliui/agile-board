import { Input } from 'antd';
import styled from 'styled-components';

export const InputStyled = styled(Input)<{ $strong?: boolean }>`
  width: fit-content;

  input {
    font-weight: ${($strong) => ($strong ? 700 : 400)};
  }
`;
