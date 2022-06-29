import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import App from '@/app/App';

const reactDomRoot = createRoot(document.getElementById('root'));

reactDomRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
