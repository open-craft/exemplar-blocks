import { render, screen } from '../../tests-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type InitData } from '../../../types';
import HoverListItemForm from './HoverListItemForm';

const makeInitData = (): InitData => ({
  cards: [
    {
      id: 1,
      name: '',
      title: '',
      secondaryContent: {
        kind: 'HOVER_LIST',
        items: [{ description: '', hoverContent: '', icon: '' }],
      },
    },
  ],
  displayName: 'Test',
  orientation: 'HORIZONTAL',
});

const HoverListFormWithContext = () => (
  <Formik initialValues={makeInitData()} onSubmit={() => {}}>
    <HoverListItemForm cardIndex={0} />
  </Formik>
);

describe('HoverListItemForm', () => {
  it('starts with one pre-populated list item showing Main Text, Icon, Hover Text fields', () => {
    render(<HoverListFormWithContext />);
    expect(screen.getByText('List Item 1')).toBeInTheDocument();
    expect(screen.getByText('Main Text')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Hover Text')).toBeInTheDocument();
  });

  it('renders an Add List Item button', () => {
    render(<HoverListFormWithContext />);
  });

  it('adds a second item when Add List Item is clicked', async () => {
    const user = userEvent.setup();
    render(<HoverListFormWithContext />);

    const addItemButton = screen.getByRole('button', {
      name: /Add List Item/i,
    });
    expect(addItemButton).toBeInTheDocument();

    await user.click(addItemButton);
    expect(screen.getByText('List Item 2')).toBeInTheDocument();
  });

  it('updates the icon field when an icon is selected from IconSelector', async () => {
    const user = userEvent.setup();
    render(<HoverListFormWithContext />);

    // Initially the icon is empty, so the trigger shows 'add'
    const triggerIcon = document.querySelector(
      '.material-icons-outlined.mb-0',
    ) as HTMLElement;
    expect(triggerIcon.textContent).toBe('add');

    // Open the icon popup via the IconSelector trigger button
    const iconSelectorButton = document.querySelector(
      '.icon-selector',
    ) as HTMLElement;
    await user.click(iconSelectorButton);

    // Click the first icon in the grid ('search' is first in the default list)
    const firstIconDiv = document.querySelector('.icon-symbol') as HTMLElement;
    await user.click(firstIconDiv);

    // The trigger should now display the selected icon name instead of 'add'
    expect(triggerIcon.textContent).toBe('search');
  });

  it('removes an item when its Delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<HoverListFormWithContext />);
    await user.click(screen.getByRole('button', { name: /Add List Item/i }));
    expect(screen.getByText('List Item 2')).toBeInTheDocument();

    // Each item has a Delete button; click the second one
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/ });
    await user.click(deleteButtons[1]);
    expect(screen.queryByText('List Item 2')).not.toBeInTheDocument();
    expect(screen.getByText('List Item 1')).toBeInTheDocument();
  });
});
