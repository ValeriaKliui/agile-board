import { MEDIA } from '@config';
import { Flex } from 'antd';
import styled from 'styled-components';

export const FlexStyled = styled(Flex)`
  ${MEDIA.m} {
    flex-direction: row;
  }
`;
