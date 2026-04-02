import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </StrictMode>,
);
