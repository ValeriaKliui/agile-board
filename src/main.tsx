import './config/firebase';

import { ThemeProvider } from '@config';
import { ErrorFallback } from '@shared/components/ErrorFallback';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { App } from './App';
import GlobalStyle from './config/globalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ErrorBoundary fallback={<ErrorFallback />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode >,
);
