import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App.tsx';
import type { XBlockRuntime } from '../../types.ts';
import type { CoverBlockFields } from '../apiTypes.ts';
import './style.scss';
import { getRoot } from '../../lib/utils.ts';

export const renderBlock = (
  element: Element,
  _runtime: XBlockRuntime,
  initData: CoverBlockFields,
) => {
  const container = getRoot(element);
  createRoot(container).render(
    <StrictMode>
      <IntlProvider locale="en">
        <App {...initData} />
      </IntlProvider>
    </StrictMode>,
  );
};
