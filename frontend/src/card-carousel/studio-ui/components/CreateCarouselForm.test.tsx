import { render, screen } from '../tests-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { Orientation, type InitData } from '../../types';
import CreateCarouselForm from './CreateCarouselForm';

const makeInitData = (overrides: Partial<InitData> = {}): InitData => ({
  cards: [],
  displayName: 'My Carousel',
  orientation: Orientation.HORIZONTAL,
  ...overrides,
});

const CreateCarouselFormWithContext = ({
  initData,
}: {
  initData: InitData;
}) => (
  <Formik initialValues={initData} onSubmit={() => {}}>
    <CreateCarouselForm />
  </Formik>
);

describe('CreateCarouselForm', () => {
  it('shows the Display Name field with the current value', () => {
    render(<CreateCarouselFormWithContext initData={makeInitData()} />);
    expect(screen.getByRole('textbox', { name: 'Display Name' })).toHaveValue(
      'My Carousel',
    );
  });

  it('shows Vertical Cards and Horizontal Cards orientation buttons', () => {
    render(<CreateCarouselFormWithContext initData={makeInitData()} />);
    expect(
      screen.getByRole('button', { name: /Vertical Cards/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Horizontal Cards/ }),
    ).toBeInTheDocument();
  });

  describe('Card layout orientation buttons', () => {
    it('switches orientation to VERTICAL when the Vertical Cards button is clicked', async () => {
      const user = userEvent.setup();
      render(
        <CreateCarouselFormWithContext
          initData={makeInitData({ orientation: Orientation.HORIZONTAL })}
        />,
      );
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
      render(
        <CreateCarouselFormWithContext
          initData={makeInitData({ orientation: Orientation.VERTICAL })}
        />,
      );
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

  describe('Add card numbers checkbox', () => {
    it('is checked by default when disableNumbering is not set', () => {
      render(<CreateCarouselFormWithContext initData={makeInitData()} />);
      expect(
        screen.getByRole('checkbox', { name: 'Add card numbers' }),
      ).toBeChecked();
    });

    it('is unchecked when disableNumbering is true', () => {
      render(
        <CreateCarouselFormWithContext
          initData={makeInitData({ disableNumbering: true })}
        />,
      );
      expect(
        screen.getByRole('checkbox', { name: 'Add card numbers' }),
      ).not.toBeChecked();
    });

    it('can be toggled off and back on', async () => {
      const user = userEvent.setup();
      render(<CreateCarouselFormWithContext initData={makeInitData()} />);
      const checkbox = screen.getByRole('checkbox', {
        name: 'Add card numbers',
      });
      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });
});
