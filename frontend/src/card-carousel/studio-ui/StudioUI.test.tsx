import {
  render as originalRender,
  screen,
  type RenderOptions,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { XBlockRuntime } from '../../types';
import { IntlProvider } from 'react-intl';
import type { ReactElement, ReactNode } from 'react';
import StudioUI from './StudioUI';
import type { InitData } from '../types';

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <IntlProvider locale="en">{children}</IntlProvider>;
  };

  return originalRender(ui, { wrapper: Wrapper, ...options });
};

const defaultInitData: InitData = {
  cards: [],
  displayName: 'Carousel Editor',
  orientation: 'HORIZONTAL',
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Studio UI', () => {
  it('shows CreateCarouselForm initially', () => {
    render(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
    );
    expect(
      screen.getByRole('heading', { name: 'Create Card Carousel' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).toBeInTheDocument();
  });

  it('clicking Continue shows the CarouselEditor', async () => {
    const user = userEvent.setup();
    render(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
    );
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(
      screen.getByRole('button', { name: /Add Card/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });
});
