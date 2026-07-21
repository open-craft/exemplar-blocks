import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';

const defaultData: Data = {
  displayName: '',
  content: {
    header: 'the header',
    footer: 'the footer',
    ideas: [{ title: 'idea 1', points: ['point 1', 'point 2'] }],
  },
  backgroundColor: '#FFFFFF',
};

const specRender = (initialData: Data = defaultData) => {
  const mockOnSave = vi.fn();
  const mockOnCancel = vi.fn();

  return {
    mockOnSave,
    mockOnCancel,
    initialData,
    user: userEvent.setup(),
    screen: render(
      <React.StrictMode>
        <IntlProvider locale="en">
          <App
            initialData={initialData}
            onSave={mockOnSave}
            onCancel={mockOnCancel}
          />
        </IntlProvider>
      </React.StrictMode>,
    ),
  };
};

describe('App.tsx', () => {
  it('renders', () => {
    const { screen } = specRender();

    screen.getByDisplayValue('the header');
  });

  it('calls the save handler when the save button is clicked', () => {
    const { screen, mockOnCancel, mockOnSave, initialData } = specRender();

    screen.getByText('Save').click();

    expect(mockOnSave).toHaveBeenCalledExactlyOnceWith(initialData);
    expect(mockOnCancel).not.toHaveBeenCalled();
  });

  it('calls the cancel handler when the cancel button is clicked', () => {
    const { screen, mockOnSave, mockOnCancel } = specRender();

    screen.getByText('Cancel').click();

    expect(mockOnSave).not.toHaveBeenCalled();
    expect(mockOnCancel).toHaveBeenCalledExactlyOnceWith();
  });

  it('edits and saves with updates', async () => {
    const expectedData: Data = {
      displayName: 'testing ideas',
      backgroundColor: '#FFFFFF',
      content: {
        header: 'the header',
        footer: 'the footer',
        ideas: [{ title: 'idea 1', points: ['point 2'] }],
      },
    };

    const { screen, mockOnCancel, mockOnSave, user } = specRender();

    // update the display name
    const displayNameInput = screen.getByLabelText(/Display Name/, {
      selector: 'input',
    });
    await user.type(displayNameInput, 'testing ideas');

    // remove an example placeholder idea point
    const deletePointButtons = screen.getAllByLabelText(/Delete point/);
    await user.click(deletePointButtons[0]);

    // save the changes
    screen.getByText('Save').click();

    expect(mockOnSave).toHaveBeenCalledExactlyOnceWith(expectedData);
    expect(mockOnCancel).not.toHaveBeenCalled();
  });
});
