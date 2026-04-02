import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import StudentUI from './StudentUI.tsx';
import type { XBlockRuntime } from '../../types.ts';
import type { InitData } from '../types.ts';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  initData: InitData,
) => {
  const container =
    element && 'jquery' in element
      ? (element as unknown as HTMLElement[])[0]
      : element;
  createRoot(container!).render(
    <StrictMode>
      {/* The IntlProvider is required as the CardCarousel Paragon Component expects it. */}
      <IntlProvider locale="en">
        <StudentUI runtime={runtime} initData={initData} />
      </IntlProvider>
    </StrictMode>,
  );
};
