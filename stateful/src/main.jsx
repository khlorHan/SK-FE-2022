import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import App from '@/app/App';
import { ErrorBoundary } from '@/components';

const reactDomRoot = createRoot(document.getElementById('root'));

reactDomRoot.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
