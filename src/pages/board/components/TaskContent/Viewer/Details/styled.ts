import { MEDIA } from '@config';
import styled from 'styled-components';

export const Container = styled.div`
  ${MEDIA.xxs} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 15px;
  }
  ${MEDIA.m} {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;
