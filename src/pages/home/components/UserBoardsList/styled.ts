import { MEDIA } from '@config';
import { Flex } from 'antd';
import { Result } from 'antd';
import styled from 'styled-components';

export const Container = styled(Flex)`
  width: 100%;
  ${MEDIA.xxs} {
    text-align: center;
  }
  ${MEDIA.m} {
    text-align: unset;
  }
`;
export const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 320px));
  gap: 2em;
  ${MEDIA.xxs} {
    justify-content: center;
  }
  ${MEDIA.m} {
    justify-content: unset;
  }
`;

export const ResultStyled = styled(Result)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ant-result-extra {
    margin-top: 10px;
  }
  .ant-result-icon {
    margin: 0;
  }
`;
