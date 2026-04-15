import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import type { XBlockRuntime } from '../../types.ts';
import type { Data } from '../apiTypes.ts';
import { getRoot } from '../../lib/utils.ts';

import { App } from './App.tsx';

export const renderBlock = (
  _runtime: XBlockRuntime,
  element: Element,
  data: Data,
) => {
  const container = getRoot(element);
  createRoot(container).render(
    <StrictMode>
      <IntlProvider locale="en">
        <App data={data} />
      </IntlProvider>
    </StrictMode>,
  );
};
