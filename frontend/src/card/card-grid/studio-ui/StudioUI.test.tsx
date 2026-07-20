import { render, screen } from '@opencraft/xblock-react-utils/testing';
import {
  saveStudioBlock,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import StudioUI from './StudioUI';
import type { InitData } from '@/card/card-grid/types';

vi.mock('@opencraft/xblock-react-utils', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('@opencraft/xblock-react-utils')>();
  return { ...actual, saveStudioBlock: vi.fn() };
});

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const defaultInitData: InitData = {
  cards: [
    {
      id: 1,
      name: 'Card #1',
      title: '',
      secondaryContent: null,
    },
  ],
  displayName: 'Card Grid Editor',
  description: '<p>Test description</p>', // p tags because TinyMCE always return HTML
  orientation: 'HORIZONTAL',
  backgroundColor: '#ffffff',
  footerDescription: '',
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Studio UI', () => {
  it('shows the CreateCardGridForm initially', () => {
    render(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
    );
    expect(
      screen.getByRole('textbox', { name: 'Display Name' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).toBeInTheDocument();
  });

  it('clicking Continue shows the card editor', async () => {
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

  it('saves the block when the Save button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <StudioUI
        runtime={mockRuntime}
        initData={defaultInitData}
        saveUrl="/save-here"
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(saveStudioBlock).toHaveBeenCalledWith(
      expect.objectContaining({
        saveUrl: '/save-here',
        data: defaultInitData,
        runtime: mockRuntime,
      }),
    );
  });
});
