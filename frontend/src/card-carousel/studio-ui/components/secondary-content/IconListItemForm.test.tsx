import { render, screen } from '../../tests-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { CardType, Orientation, type InitData } from '../../../types';
import IconListItemForm from './IconListItemForm';

const makeInitData = (): InitData => ({
  cards: [
    {
      id: 1,
      title: '',
      cardType: CardType.RICH_LIST,
      secondaryContent: {
        items: [{ icon: '', title: '', description: '' }],
      },
    },
  ],
  displayName: 'Test',
  orientation: Orientation.HORIZONTAL,
});

const IconListFormWithContext = () => (
  <Formik initialValues={makeInitData()} onSubmit={() => {}}>
    <IconListItemForm cardIndex={0} />
  </Formik>
);

describe('IconListItemForm', () => {
  it('starts with one pre-populated list item showing Icon, Heading, Description fields', () => {
    render(<IconListFormWithContext />);
    expect(screen.getByText('List Item 1')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('adds a second item when Add List Item is clicked', async () => {
    const user = userEvent.setup();
    render(<IconListFormWithContext />);

    const addItemButton = screen.getByRole('button', {
      name: /Add List Item/i,
    });
    expect(addItemButton).toBeInTheDocument();

    await user.click(addItemButton);
    expect(screen.getByText('List Item 2')).toBeInTheDocument();
  });

  it('removes an item when its Delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<IconListFormWithContext />);

    await user.click(screen.getByRole('button', { name: /Add List Item/i }));
    expect(screen.getByText('List Item 2')).toBeInTheDocument();

    // Each item has a Delete button; click the second one
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/ });
    await user.click(deleteButtons[1]);

    expect(screen.queryByText('List Item 2')).not.toBeInTheDocument();
    expect(screen.getByText('List Item 1')).toBeInTheDocument();
  });
});
