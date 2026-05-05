import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import StudioUI from './StudioUI';
import type { XBlockRuntime } from '../../types.ts';
import type { InitData } from '../types.ts';
import { newCard } from './utils';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  initData: InitData,
) => {
  const container =
    element && 'jquery' in element
      ? (element as unknown as HTMLElement[])[0]
      : element;
  const saveUrl = runtime.handlerUrl(element, 'studio_save');
  if (!initData.cards || !initData.cards.length) {
    initData.cards = [newCard()];
  }

  // The Modal Body has a harcoded value of 435px in studio-main-v1.css
  // This effect updates that height to match make sure the full content is visible.
  const modalBody = container.parentElement?.parentElement;
  if (modalBody) {
    modalBody.style.minHeight = '500px';
  }

  createRoot(container!).render(
    <StrictMode>
      <IntlProvider locale="en">
        <StudioUI saveUrl={saveUrl} runtime={runtime} initData={initData} />
      </IntlProvider>
    </StrictMode>,
  );
};
