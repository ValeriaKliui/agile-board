import { MEDIA } from '@config';
import { Card, Flex } from 'antd';
import styled from 'styled-components';

export const ContentCard = styled(Card)`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;
export const ProfileInfoContainer = styled(Flex)`
  ${MEDIA.small} {
    align-items: center;
  }
`;
