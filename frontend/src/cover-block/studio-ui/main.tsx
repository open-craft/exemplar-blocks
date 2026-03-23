import type { XBlockRuntime } from '../../types.ts';
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import App from './App.tsx';
import type { InitData } from '../types.ts';
import { RuntimeContext } from '../../lib/context.ts';
import { getRoot } from '../../lib/utils.ts';
import './style.scss';
import { createRoot } from 'react-dom/client';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  initData: InitData,
) => {
  const container = getRoot(element);

  createRoot(container).render(
    <React.StrictMode>
      <IntlProvider locale="en">
        <RuntimeContext.Provider value={{ runtime, element: container }}>
          <App {...initData} />
        </RuntimeContext.Provider>
      </IntlProvider>
    </React.StrictMode>,
  );
};
