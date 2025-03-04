import { MEDIA } from '@config';
import { Divider } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  ${MEDIA.xxs} {
    display: grid;
    gap: 40px;
  }
  ${MEDIA.l} {
    grid-template-columns: 0.7fr 0.3fr;
  }
`;
export const DividerStyled = styled(Divider)`
  ${MEDIA.xxs} {
    display: none;
  }
  ${MEDIA.m} {
    height: 100%;
  }
`;
