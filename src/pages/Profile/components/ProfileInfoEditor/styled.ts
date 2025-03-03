import { MEDIA } from '@config';
import { Flex } from 'antd';
import styled from 'styled-components';

export const ProfileActions = styled(Flex)`
  ${MEDIA.m} {
    flex-direction: row;
  }
`;
