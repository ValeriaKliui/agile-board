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
    ${MEDIA.l} {
      font-size: 16px;
    }

    ${MEDIA.xl} {
      font-size: 18px;
    }
  }
  h3,
  h4,
  h5 {
    margin-top: 0.5em;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;
