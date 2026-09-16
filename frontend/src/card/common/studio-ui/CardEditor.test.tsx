import { render, screen } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { Formik } from 'formik';
import CardEditor from './CardEditor';
import type { FormDataPartial, CardData, Orientation } from '../types';

const defaultCard: CardData = {
  id: 1,
  name: 'Test Card',
  title: '',
  subtitle: '',
  secondaryContent: null,
};

const testInitData: FormDataPartial = {
  cards: [defaultCard],
};

// Wrap the component in Formik so useFormikContext has data
const CardEditorWithContext = ({
  enableOrientation = false,
  orientation,
}: {
  enableOrientation?: boolean;
  orientation?: Orientation;
} = {}) => {
  const initData = orientation
    ? {
        cards: [
          {
            ...defaultCard,
            orientation,
          },
        ],
      }
    : testInitData;

  return (
    <Formik initialValues={initData} onSubmit={() => {}}>
      <CardEditor cardIndex={0} enableOrientation={enableOrientation} />
    </Formik>
  );
};

describe('CardEditor', () => {
  it('starts with the card name and provided type', () => {
    render(<CardEditorWithContext />);
    expect(screen.getByRole('textbox', { name: 'Card Name' })).toHaveValue(
      'Test Card',
    );
    expect(
      screen.getByRole('combobox', { name: 'Supporting Content' }),
    ).toHaveValue('UNKNOWN');
  });

  it('hides the card layout buttons by default', () => {
    render(<CardEditorWithContext />);
    expect(
      screen.queryByRole('button', { name: /Vertical Card/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /Horizontal Card/ }),
    ).not.toBeInTheDocument();
  });

  it('shows and updates card layout buttons when enabled', async () => {
    const user = userEvent.setup();
    render(
      <CardEditorWithContext enableOrientation orientation="HORIZONTAL" />,
    );

    const verticalButton = screen.getByRole('button', {
      name: /Vertical Card/,
    });
    const horizontalButton = screen.getByRole('button', {
      name: /Horizontal Card/,
    });
    expect(horizontalButton).toHaveClass('btn-outline-success');
    expect(verticalButton).toHaveClass('btn-outline-secondary');

    await user.click(verticalButton);
    expect(verticalButton).toHaveClass('btn-outline-success');
    expect(horizontalButton).toHaveClass('btn-outline-secondary');
  });

  describe('Card Type: IMAGE', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<CardEditorWithContext />);
      await user.selectOptions(screen.getByRole('combobox'), 'IMAGE');
    });

    it('shows Primary: title, subtitle, description, CTA Button Toggle', () => {
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Body Content')).toBeInTheDocument();
      expect(
        screen.getByRole('checkbox', { name: 'Add a button' }),
      ).toBeInTheDocument();
    });

    it('shows Secondary: url, alt text', () => {
      expect(screen.getByText('Image Source URL')).toBeInTheDocument();
      expect(screen.getByText('Alt Text')).toBeInTheDocument();
    });
  });

  describe('Card Type: RICH_LIST', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<CardEditorWithContext />);
      await user.selectOptions(screen.getByRole('combobox'), 'RICH_LIST');
    });

    it('shows Primary: title, subtitle, body content, CTA button toggle', () => {
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Body Content')).toBeInTheDocument();
      expect(
        screen.getByRole('checkbox', { name: 'Add a button' }),
      ).toBeInTheDocument();
    });

    it('shows Secondary: icon list with one item pre-populated and an add button', () => {
      expect(screen.getByText('List Item 1')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Add List Item/i }),
      ).toBeInTheDocument();
    });
  });

  describe('Card Type: HOVER_LIST', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<CardEditorWithContext />);
      await user.selectOptions(screen.getByRole('combobox'), 'HOVER_LIST');
    });

    it('shows Primary: title and subtitle only (no body content or CTA button)', () => {
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Subtitle')).toBeInTheDocument();

      // HOVER_LIST doesn't support body or CTA
      expect(screen.queryByText('Body Content')).not.toBeInTheDocument();
      expect(
        screen.queryByRole('checkbox', { name: 'Add a button' }),
      ).not.toBeInTheDocument();
    });

    it('shows Secondary: hover list with one item pre-populated and an add button', () => {
      expect(screen.getByText('List Item 1')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Add List Item/i }),
      ).toBeInTheDocument();
    });
  });

  describe('Card Type: CONTENT_HIGHLIGHT', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<CardEditorWithContext />);
      await user.selectOptions(
        screen.getByRole('combobox'),
        'CONTENT_HIGHLIGHT',
      );
    });

    it('shows two columns: primary (title, subtitle, body content, CTA button) and secondary (title, subtitle, description)', () => {
      // CONTENT_HIGHLIGHT renders Title and Subtitle in both columns, so there
      // are exactly two of each. The first belongs to the primary (card) column
      // and the second to the secondary (highlight) column.
      const titles = screen.getAllByText('Title');
      const subtitles = screen.getAllByText('Subtitle');
      expect(titles).toHaveLength(2);
      expect(subtitles).toHaveLength(2);

      // Primary column
      expect(screen.getByText('Body Content')).toBeInTheDocument();
      expect(
        screen.getByRole('checkbox', { name: 'Add a button' }),
      ).toBeInTheDocument();

      // Secondary column
      expect(screen.getByText('Description')).toBeInTheDocument();
    });
  });
});
