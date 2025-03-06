import { PropsWithChildren } from 'react';

import { Container } from './styled';

export const Centered = ({ children }: PropsWithChildren) => {
  return (
    <Container justify="center" align="center">
      {children}
    </Container>
  );
};
