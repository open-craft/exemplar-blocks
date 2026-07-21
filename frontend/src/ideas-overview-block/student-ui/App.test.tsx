import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';

const specRender = (component: ReactNode) =>
  render(
    <React.StrictMode>
      <IntlProvider locale="en">{component}</IntlProvider>
    </React.StrictMode>,
  );

describe('App.tsx', () => {
  it('renders', () => {
    const data: Data = {
      displayName: '',
      content: {
        header: 'An overview of ideas',
        footer: 'footer',
        ideas: [
          {
            title: 'idea 1',
            points: ['point 1', 'point 2'],
          },
        ],
      },
      backgroundColor: '#FFFFFF',
    };
    const screen = specRender(<App data={data} />);
    screen.getByText('An overview of ideas');
  });

  it('renders with minimal data', () => {
    const data: Data = {
      displayName: '',
      content: {
        header: '',
        footer: '',
        ideas: [
          {
            title: 'idea 1',
            points: [],
          },
        ],
      },
      backgroundColor: '#FFFFFF',
    };
    const screen = specRender(<App data={data} />);
    screen.getByText('idea 1');
  });
});
