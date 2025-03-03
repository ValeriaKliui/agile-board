import { MEDIA } from '@config';
import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body,
  #root {
    min-height: 100vh;
    margin: 0;
  }

  body {
    ${MEDIA.large} {
      font-size: 16px;
    }

    ${MEDIA.xlarge} {
      font-size: 18px;
    }
  }
  .capitalize {
    text-transform: capitalize;
  }
`;
