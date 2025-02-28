import { Result } from 'antd';
import styled from 'styled-components';

export const ResultStyled = styled(Result)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .ant-result-extra {
    margin-top: 10px;
  }
`;
