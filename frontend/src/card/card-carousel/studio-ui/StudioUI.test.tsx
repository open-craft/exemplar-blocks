import { render, screen } from '@opencraft/xblock-react-utils/testing';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import StudioUI from './StudioUI';
import type { InitData } from '@/card/card-carousel/types';

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const defaultInitData: InitData = {
  cards: [],
  displayName: 'Carousel Editor',
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
