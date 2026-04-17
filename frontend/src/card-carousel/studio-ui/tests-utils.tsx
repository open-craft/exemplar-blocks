/* eslint-disable react-refresh/only-export-components */
import '../../test/setup.ts';
import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <IntlProvider locale="en">{children}</IntlProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
