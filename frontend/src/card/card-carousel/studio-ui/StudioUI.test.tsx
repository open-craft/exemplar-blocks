import { render, screen } from '@opencraft/xblock-react-utils/testing';
import {
  saveStudioBlock,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import StudioUI from './StudioUI';
import type { InitData } from '@/card/card-carousel/types';

vi.mock('@opencraft/xblock-react-utils', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('@opencraft/xblock-react-utils')>();
  return { ...actual, saveStudioBlock: vi.fn() };
});

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const defaultInitData: InitData = {
  cards: [],
  displayName: 'Carousel Editor',
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Studio UI', () => {
  it('adds new cards using the fixed horizontal default orientation', async () => {
    const user = userEvent.setup();
    render(
      <StudioUI
        runtime={mockRuntime}
        saveUrl=""
        initData={{
          displayName: 'Legacy',
          cards: [
            {
              id: 1,
              name: 'Old card',
              title: '',
              orientation: 'VERTICAL',
              secondaryContent: null,
            },
          ],
        }}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByRole('button', { name: /Vertical Card/ })).toHaveClass(
      'btn-outline-success',
    );
    await user.click(screen.getByRole('button', { name: /Horizontal Card/ }));
    await user.click(screen.getByRole('button', { name: /Add Card/i }));
    expect(screen.getByRole('button', { name: /Horizontal Card/ })).toHaveClass(
      'btn-outline-success',
    );
    await user.click(screen.getByText('Old card'));
    expect(screen.getByRole('button', { name: /Horizontal Card/ })).toHaveClass(
      'btn-outline-success',
    );
  });

  it('saves per-card orientation without root orientation', async () => {
    const user = userEvent.setup();
    const card = {
      id: 1,
      name: 'Legacy',
      title: '',
      orientation: 'VERTICAL' as const,
      secondaryContent: null,
    };
    render(
      <StudioUI
        runtime={mockRuntime}
        saveUrl="/save"
        initData={{
          displayName: 'Legacy',
          cards: [card],
        }}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(saveStudioBlock).toHaveBeenCalledWith(
      expect.objectContaining({
        saveUrl: '/save',
        data: {
          displayName: 'Legacy',
          cards: [card],
        },
      }),
    );
    expect(card.orientation).toBe('VERTICAL');
  });

  it('gives the first placeholder card the fixed horizontal orientation', async () => {
    const user = userEvent.setup();
    render(
      <StudioUI runtime={mockRuntime} saveUrl="" initData={defaultInitData} />,
    );
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByRole('button', { name: /Horizontal Card/ })).toHaveClass(
      'btn-outline-success',
    );
    expect(defaultInitData.cards).toEqual([]);
  });

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
