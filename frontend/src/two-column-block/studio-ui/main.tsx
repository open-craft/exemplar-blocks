import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { App } from './App.tsx';
import type { XBlockRuntime } from '../../types.ts';
import type { Data } from '../apiTypes.ts';

import './main.scss';
import { getRoot } from '../../lib/utils.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  initialData: Data,
) => {
  const container = getRoot(element);

  const studioSaveUrl = runtime.handlerUrl(container, 'studio_save');
  const save = (data: Data) => {
    runtime.notify('save', { state: 'start' });
    $.post(studioSaveUrl, JSON.stringify(data))
      .done(() => {
        runtime.notify('save', { state: 'end' });
      })
      .fail((data) => {
        console.log('Fail data:', data.responseJSON);
        runtime.notify('error', {
          title: 'Save Error',
          message: `Failed to save two-column block: {data.responseJSON.error}`,
        });
      });
  };

  const cancel = () => runtime.notify('cancel', {});

  createRoot(container).render(
    <StrictMode>
      <IntlProvider locale="en">
        <App initialData={initialData} onSave={save} onCancel={cancel} />
      </IntlProvider>
    </StrictMode>,
  );
};
