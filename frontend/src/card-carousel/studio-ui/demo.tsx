import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import StudioUI from './StudioUI';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import { type InitData } from '../types.ts';
import { newCard } from './utils.ts';

const mockRuntime: XBlockRuntime = {
  handlerUrl: () => '',
  notify: (action: string, data: object) => console.log(action, data),
};
const initData: InitData = {
  displayName: 'Demo Carousel',
  orientation: 'HORIZONTAL',
  cards: [newCard()],
  backgroundColor: '#ccc',
};

const saveUrl = 'save-data';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en">
      <StudioUI saveUrl={saveUrl} runtime={mockRuntime} initData={initData} />
    </IntlProvider>
  </StrictMode>,
);
