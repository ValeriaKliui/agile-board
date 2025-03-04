import { Flex } from 'antd';
import styled from 'styled-components';

export const ModalContent = styled(Flex)`
  min-height: 120px;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;

  & > *:first-child {
    width: 100%;
    padding: 10px 20px 0 13px;
  }
`;
