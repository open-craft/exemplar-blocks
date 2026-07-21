import { act } from 'react';
import { render, screen, within } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type InitData } from '@/card/card-grid/types';
import CreateCardGridForm from './CreateCardGridForm';

const makeInitData = (overrides: Partial<InitData> = {}): InitData => ({
  cards: [],
  displayName: 'My Card Grid',
  description: 'This is a test grid',
  orientation: 'HORIZONTAL',
  backgroundColor: '#ffffff',
  footerDescription: 'Footer text',
  ...overrides,
});

const CreateCardGridFormWithContext = ({
  initData,
}: {
  initData: InitData;
}) => (
  <Formik initialValues={initData} onSubmit={() => {}}>
    <CreateCardGridForm />
  </Formik>
);

// Paragon's ColorPicker positions its popup via Popper, which updates React
// state asynchronously after mount; flush that update inside act() so tests
// don't warn about un-wrapped state updates.
const renderForm = async (initData: InitData) => {
  const result = render(<CreateCardGridFormWithContext initData={initData} />);
  await act(async () => {});
  return result;
};

describe('CreateCardGridForm', () => {
  it('shows the Title field with the current value', async () => {
    await renderForm(makeInitData());
    expect(screen.getByRole('textbox', { name: 'Display Name' })).toHaveValue(
      'My Card Grid',
    );
  });

  it('updates the Title field as the user types', async () => {
    const user = userEvent.setup();
    await renderForm(makeInitData({ displayName: '' }));
    const title = screen.getByRole('textbox', { name: 'Display Name' });
    await user.type(title, 'Updated');
    expect(title).toHaveValue('Updated');
  });

  // The rich text editors aren't associated with their labels, so scope the
  // textbox query to the Form.Group that contains the label.
  const getEditor = (label: string) => {
    const group = screen.getByText(label).closest('.pgn__form-group');
    return within(group as HTMLElement).getByRole('textbox');
  };

  // NOTE: The actual editing of the content is not tested here
  // as that would simply be testing the Mock set up in place of
  // the TinyMCE Editor. So just testing that the components are
  // wired correctly.
  describe('Description', () => {
    it('shows the description from the init data', async () => {
      await renderForm(makeInitData({ description: 'Grid intro text' }));
      expect(getEditor('Description')).toHaveValue('Grid intro text');
    });
  });

  describe('Footer Description', () => {
    it('shows the footer description from the init data', async () => {
      await renderForm(makeInitData({ footerDescription: 'Grid footer text' }));
      expect(getEditor('Footer Description')).toHaveValue('Grid footer text');
    });
  });

  describe('Card layout orientation buttons', () => {
    it('switches orientation to VERTICAL when the Vertical Cards button is clicked', async () => {
      const user = userEvent.setup();
      await renderForm(makeInitData({ orientation: 'HORIZONTAL' }));
      await user.click(screen.getByRole('button', { name: /Vertical Cards/ }));
      expect(
        screen.getByRole('button', { name: /Vertical Cards/ }),
      ).toHaveClass('btn-outline-success');
      expect(
        screen.getByRole('button', { name: /Horizontal Cards/ }),
      ).toHaveClass('btn-outline-secondary');
    });

    it('switches orientation to HORIZONTAL when the Horizontal Cards button is clicked', async () => {
      const user = userEvent.setup();
      await renderForm(makeInitData({ orientation: 'VERTICAL' }));
      await user.click(
        screen.getByRole('button', { name: /Horizontal Cards/ }),
      );
      expect(
        screen.getByRole('button', { name: /Horizontal Cards/ }),
      ).toHaveClass('btn-outline-success');
      expect(
        screen.getByRole('button', { name: /Vertical Cards/ }),
      ).toHaveClass('btn-outline-secondary');
    });
  });

  describe('Background color', () => {
    it('shows the color from the init data', async () => {
      const { container } = await renderForm(
        makeInitData({ backgroundColor: '#12FF23' }),
      );
      const colorPicker =
        container.getElementsByClassName('pgn__color-picker')[0];
      expect(colorPicker).toHaveStyle('background-color: rgb(18, 255, 35);');
    });
    // NOTE: The color-picker is a complex element with a floating div acting as the
    // picking area. Testing its interactivity is out of scope for this test.
  });
});
