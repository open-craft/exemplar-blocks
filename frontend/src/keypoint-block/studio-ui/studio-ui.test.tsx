import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import StudioUi from './studio-ui';
import { type XBlockRuntime } from '../../types';
import { type KeyPoint } from '../type';

// ── jQuery mock ──────────────────────────────────────────────────────────────
// $.post returns a jQuery-style deferred with .done()/.fail() chaining.
interface MockDeferred {
  done: (cb: () => void) => MockDeferred;
  fail: (cb: () => void) => MockDeferred;
  _resolveDone: () => void;
  _resolveFail: () => void;
}

function createMockDeferred(): MockDeferred {
  let doneCb: (() => void) | null = null;
  let failCb: (() => void) | null = null;
  const deferred: MockDeferred = {
    done(cb) { doneCb = cb; return deferred; },
    fail(cb) { failCb = cb; return deferred; },
    _resolveDone() { doneCb?.(); },
    _resolveFail() { failCb?.(); },
  };
  return deferred;
}

let lastDeferred: MockDeferred;
const mockPost = vi.fn(() => {
  lastDeferred = createMockDeferred();
  return lastDeferred;
});

// Assign to globalThis so the component's `$.post(...)` calls hit our mock.
(globalThis as any).$ = { post: mockPost };

// ── helpers ──────────────────────────────────────────────────────────────────

const sampleKeypoints: KeyPoint[] = [
  { keypoint: 'Fluid balance', description: 'Regulation of fluids.' },
  { keypoint: 'Neural signaling', description: 'How neurons communicate.' },
];

function mockRuntime(): XBlockRuntime {
  return {
    notify: vi.fn(),
    handlerUrl: vi.fn(),
  };
}

function renderStudio(overrides: Partial<React.ComponentProps<typeof StudioUi>> = {}) {
  const props: React.ComponentProps<typeof StudioUi> = {
    initialHeader: 'Key Concepts',
    initialKeypoints: sampleKeypoints,
    initialButtonText: 'Glossary',
    initialButtonLink: 'https://example.com/glossary',
    studioSaveUrl: '/handler/studio_save',
    runtime: mockRuntime(),
    ...overrides,
  };
  const result = render(<StudioUi {...props} />);
  return { ...result, runtime: props.runtime };
}

// ── tests ────────────────────────────────────────────────────────────────────

beforeEach(() => {
  mockPost.mockClear();
});

describe('StudioUi', () => {
  // ─── initial rendering ───────────────────────────────────────────────────

  describe('initial rendering', () => {
    it('renders the Block Header input with initial value', () => {
      renderStudio();
      const input = screen.getByPlaceholderText('e.g. Key Concepts to Explore');
      expect(input).toHaveValue('Key Concepts');
    });

    it('renders Button Text input with initial value', () => {
      renderStudio();
      const input = screen.getByPlaceholderText('e.g. Glossary');
      expect(input).toHaveValue('Glossary');
    });

    it('renders Button Link input with initial value', () => {
      renderStudio();
      const input = screen.getByPlaceholderText('e.g. https://example.com/glossary');
      expect(input).toHaveValue('https://example.com/glossary');
    });

    it('renders pre-populated keypoints with labels and descriptions', () => {
      renderStudio();
      expect(screen.getByDisplayValue('Fluid balance')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Regulation of fluids.')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Neural signaling')).toBeInTheDocument();
      expect(screen.getByDisplayValue('How neurons communicate.')).toBeInTheDocument();
    });

    it('renders term numbering', () => {
      renderStudio();
      expect(screen.getByText('Term 1')).toBeInTheDocument();
      expect(screen.getByText('Term 2')).toBeInTheDocument();
    });

    it('shows empty state message when no keypoints', () => {
      renderStudio({ initialKeypoints: [] });
      expect(screen.getByText(/No key terms added yet/)).toBeInTheDocument();
    });

    it('does not show empty state message when keypoints exist', () => {
      renderStudio();
      expect(screen.queryByText(/No key terms added yet/)).not.toBeInTheDocument();
    });

    it('renders Save and Cancel buttons', () => {
      renderStudio();
      expect(screen.getByText('Save')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  // ─── adding key terms ────────────────────────────────────────────────────

  describe('adding key terms', () => {
    it('adds a new empty keypoint entry when clicking Add Key Term', async () => {
      const user = userEvent.setup();
      renderStudio({ initialKeypoints: [] });

      await user.click(screen.getByText('Add Key Term'));

      expect(screen.getByText('Term 1')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('e.g. Fluid balance')).toHaveValue('');
      expect(screen.getByPlaceholderText('e.g. The regulation of fluids within the body...')).toHaveValue('');
    });

    it('empty state message disappears after adding a term', async () => {
      const user = userEvent.setup();
      renderStudio({ initialKeypoints: [] });

      expect(screen.getByText(/No key terms added yet/)).toBeInTheDocument();
      await user.click(screen.getByText('Add Key Term'));
      expect(screen.queryByText(/No key terms added yet/)).not.toBeInTheDocument();
    });

    it('appends to existing keypoints with correct numbering', async () => {
      const user = userEvent.setup();
      renderStudio();

      expect(screen.queryByText('Term 3')).not.toBeInTheDocument();
      await user.click(screen.getByText('Add Key Term'));
      expect(screen.getByText('Term 3')).toBeInTheDocument();
    });
  });

  // ─── editing key terms ───────────────────────────────────────────────────

  describe('editing key terms', () => {
    it('updates a keypoint label when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const labelInput = screen.getByDisplayValue('Fluid balance');
      await user.clear(labelInput);
      await user.type(labelInput, 'Electrolyte balance');
      expect(labelInput).toHaveValue('Electrolyte balance');
    });

    it('updates a keypoint description when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const descInput = screen.getByDisplayValue('Regulation of fluids.');
      await user.clear(descInput);
      await user.type(descInput, 'Updated description');
      expect(descInput).toHaveValue('Updated description');
    });

    it('editing one keypoint does not affect another', async () => {
      const user = userEvent.setup();
      renderStudio();

      const firstLabel = screen.getByDisplayValue('Fluid balance');
      await user.clear(firstLabel);
      await user.type(firstLabel, 'Changed');

      expect(screen.getByDisplayValue('Neural signaling')).toBeInTheDocument();
      expect(screen.getByDisplayValue('How neurons communicate.')).toBeInTheDocument();
    });
  });

  // ─── removing key terms ──────────────────────────────────────────────────

  describe('removing key terms', () => {
    it('removes a keypoint when clicking Remove', async () => {
      const user = userEvent.setup();
      renderStudio();

      const removeButtons = screen.getAllByText('Remove');
      await user.click(removeButtons[0]); // remove first keypoint

      expect(screen.queryByDisplayValue('Fluid balance')).not.toBeInTheDocument();
      expect(screen.getByDisplayValue('Neural signaling')).toBeInTheDocument();
    });

    it('re-numbers remaining keypoints after removal', async () => {
      const user = userEvent.setup();
      renderStudio();

      const removeButtons = screen.getAllByText('Remove');
      await user.click(removeButtons[0]);

      expect(screen.getByText('Term 1')).toBeInTheDocument();
      expect(screen.queryByText('Term 2')).not.toBeInTheDocument();
    });

    it('shows empty state message after removing all keypoints', async () => {
      const user = userEvent.setup();
      renderStudio({
        initialKeypoints: [{ keypoint: 'Only term', description: 'Only desc' }],
      });

      await user.click(screen.getByText('Remove'));
      expect(screen.getByText(/No key terms added yet/)).toBeInTheDocument();
    });
  });

  // ─── editing header and action button fields ─────────────────────────────

  describe('editing header and action button fields', () => {
    it('updates the Block Header input when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const input = screen.getByPlaceholderText('e.g. Key Concepts to Explore');
      await user.clear(input);
      await user.type(input, 'New Header');
      expect(input).toHaveValue('New Header');
    });

    it('updates the Button Text input when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const input = screen.getByPlaceholderText('e.g. Glossary');
      await user.clear(input);
      await user.type(input, 'Resources');
      expect(input).toHaveValue('Resources');
    });

    it('updates the Button Link input when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const input = screen.getByPlaceholderText('e.g. https://example.com/glossary');
      await user.clear(input);
      await user.type(input, 'https://new-link.com');
      expect(input).toHaveValue('https://new-link.com');
    });
  });

  // ─── save behaviour ──────────────────────────────────────────────────────

  describe('save behaviour', () => {
    it('calls runtime.notify with save start on click', async () => {
      const user = userEvent.setup();
      const { runtime } = renderStudio();

      await user.click(screen.getByText('Save'));

      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'start' });
    });

    it('posts the correct payload to the studioSaveUrl', async () => {
      const user = userEvent.setup();
      renderStudio();

      await user.click(screen.getByText('Save'));

      expect(mockPost).toHaveBeenCalledWith(
        '/handler/studio_save',
        JSON.stringify({
          header: 'Key Concepts',
          keypoints: sampleKeypoints,
          button_text: 'Glossary',
          button_link: 'https://example.com/glossary',
        }),
      );
    });

    it('calls runtime.notify with save end on success', async () => {
      const user = userEvent.setup();
      const { runtime } = renderStudio();

      await user.click(screen.getByText('Save'));
      lastDeferred._resolveDone();

      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'end' });
    });

    it('calls runtime.notify with error on failure', async () => {
      const user = userEvent.setup();
      const { runtime } = renderStudio();

      await user.click(screen.getByText('Save'));
      lastDeferred._resolveFail();

      expect(runtime.notify).toHaveBeenCalledWith('error', {
        title: 'Save Error',
        message: 'Failed to save keypoint configuration',
      });
    });
  });

  // ─── cancel behaviour ────────────────────────────────────────────────────

  describe('cancel behaviour', () => {
    it('calls runtime.notify with cancel on click', async () => {
      const user = userEvent.setup();
      const { runtime } = renderStudio();

      await user.click(screen.getByText('Cancel'));

      expect(runtime.notify).toHaveBeenCalledWith('cancel', {});
    });
  });

  // ─── save reflects edits ─────────────────────────────────────────────────

  describe('save reflects edits', () => {
    it('includes newly added and edited keypoints in the save payload', async () => {
      const user = userEvent.setup();
      renderStudio({ initialKeypoints: [] });

      // Add a keypoint and fill it in
      await user.click(screen.getByText('Add Key Term'));
      await user.type(screen.getByPlaceholderText('e.g. Fluid balance'), 'New term');
      await user.type(
        screen.getByPlaceholderText('e.g. The regulation of fluids within the body...'),
        'New description',
      );

      await user.click(screen.getByText('Save'));

      expect(mockPost).toHaveBeenCalledWith(
        '/handler/studio_save',
        JSON.stringify({
          header: 'Key Concepts',
          keypoints: [{ keypoint: 'New term', description: 'New description' }],
          button_text: 'Glossary',
          button_link: 'https://example.com/glossary',
        }),
      );
    });

    it('excludes removed keypoints from the save payload', async () => {
      const user = userEvent.setup();
      renderStudio();

      // Remove first keypoint
      const removeButtons = screen.getAllByText('Remove');
      await user.click(removeButtons[0]);

      await user.click(screen.getByText('Save'));

      expect(mockPost).toHaveBeenCalledWith(
        '/handler/studio_save',
        JSON.stringify({
          header: 'Key Concepts',
          keypoints: [sampleKeypoints[1]],
          button_text: 'Glossary',
          button_link: 'https://example.com/glossary',
        }),
      );
    });

    it('includes updated header and button fields in the save payload', async () => {
      const user = userEvent.setup();
      renderStudio({ initialKeypoints: [] });

      const headerInput = screen.getByPlaceholderText('e.g. Key Concepts to Explore');
      await user.clear(headerInput);
      await user.type(headerInput, 'Updated Header');

      const btnTextInput = screen.getByPlaceholderText('e.g. Glossary');
      await user.clear(btnTextInput);
      await user.type(btnTextInput, 'Resources');

      const btnLinkInput = screen.getByPlaceholderText('e.g. https://example.com/glossary');
      await user.clear(btnLinkInput);
      await user.type(btnLinkInput, 'https://new.com');

      await user.click(screen.getByText('Save'));

      expect(mockPost).toHaveBeenCalledWith(
        '/handler/studio_save',
        JSON.stringify({
          header: 'Updated Header',
          keypoints: [],
          button_text: 'Resources',
          button_link: 'https://new.com',
        }),
      );
    });
  });
});
