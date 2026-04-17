import { render, screen } from '../tests-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import type { XBlockRuntime } from '../../../types';
import ModalFooter from './ModalFooter';

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

describe('ModalFooter', () => {
  it('shows a Continue button when not showing editor', () => {
    render(
      <ModalFooter
        runtime={mockRuntime}
        showingEditor={false}
        onContinue={vi.fn()}
      />,
    );
    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).toBeInTheDocument();
  });

  it('shows a Save button when showing editor', () => {
    render(
      <ModalFooter
        runtime={mockRuntime}
        showingEditor={true}
        onContinue={vi.fn()}
      />,
    );
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('Cancel button calls runtime.notify("cancel", {})', async () => {
    const user = userEvent.setup();
    render(
      <ModalFooter
        runtime={mockRuntime}
        showingEditor={false}
        onContinue={vi.fn()}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(mockRuntime.notify).toHaveBeenCalledWith('cancel', {});
  });
});
