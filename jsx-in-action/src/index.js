/* eslint-disable no-unused-vars */

import 'styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConditionalRendering, ListRendering } from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ListRendering />
  </StrictMode>
);
