/* eslint-disable no-unused-vars */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/components';
import '@/styles/globals.css';
import App from '@/app/App.hook';

const reactDomRoot = createRoot(document.getElementById('root'));

reactDomRoot.render(
  <>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </>
);
