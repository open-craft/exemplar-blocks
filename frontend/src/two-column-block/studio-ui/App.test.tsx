import { describe, expect, it, vi } from 'vitest';
import { render, within } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';
import { defaultLayout } from '../types.ts';

const defaultData: Data = {
  displayName: '',
  columns: {
    left: defaultLayout('text'),
    right: defaultLayout('imageGrid'),
    ratio: '9:3',
    order: 'leftAboveRight',
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
      <App
        initialData={initialData}
        onSave={mockOnSave}
        onCancel={mockOnCancel}
      />,
    ),
  };
};

describe('App.tsx', () => {
  it('renders', () => {
    const { screen } = specRender();

    screen.getByDisplayValue('Text');
    screen.getByDisplayValue('Image and Text Grid');
    screen.getByLabelText(/Display Name/);
  });

  it('renders with other column types', () => {
    const initialData: Data = {
      displayName: '',
      columns: {
        left: defaultLayout('lessonList'),
        right: defaultLayout('lessonIntro'),
        ratio: '5:7',
        order: 'rightAboveLeft',
      },
      backgroundColor: '#FFFFFF',
    };
    const { screen } = specRender(initialData);

    screen.getByDisplayValue('Lesson Intro');
    screen.getByDisplayValue('Bulleted Lesson List');
    screen.getByLabelText(/Display Name/);
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
      displayName: 'hello!',
      columns: {
        left: defaultLayout('text'),
        right: defaultLayout('imageGrid'),
        ratio: '6:6',
        order: 'rightAboveLeft',
      },
      backgroundColor: '#FFFFFF',
    };

    const { screen, mockOnCancel, mockOnSave, user } = specRender();

    // update the display name
    const displayNameInput = screen.getByLabelText(/Display Name/, {
      selector: 'input',
    });
    await user.type(displayNameInput, 'hello!');

    // update the ratio
    const ratioInput = screen.getByLabelText('Column ratio', {
      selector: 'select',
    });
    await user.selectOptions(ratioInput, '6:6');

    // update the column order
    const columnRadioRight = screen.getByLabelText(/Right column/);
    await user.click(columnRadioRight);

    // save the changes
    screen.getByText('Save').click();

    expect(mockOnSave).toHaveBeenCalledExactlyOnceWith(expectedData);
    expect(mockOnCancel).not.toHaveBeenCalled();
  });

  it('switches the columns if reverse columns button is clicked', () => {
    const { screen, mockOnSave, mockOnCancel } = specRender();

    screen.getByText('Cancel').click();

    expect(mockOnSave).not.toHaveBeenCalled();
    expect(mockOnCancel).toHaveBeenCalledExactlyOnceWith();
  });

  it('edits and saves with updates', async () => {
    const expectedData: Data = {
      displayName: '',
      columns: {
        // these are switched compared to the default data
        left: defaultLayout('imageGrid'),
        right: defaultLayout('text'),
        ratio: '9:3',
        order: 'leftAboveRight',
      },
      backgroundColor: '#FFFFFF',
    };

    const { screen, mockOnSave, user } = specRender();

    const [leftColumn, rightColumn] = Array.from(
      screen.container.querySelectorAll<HTMLElement>(
        '.two-column-editor-column',
      ),
    );

    // check the current order of columns
    within(leftColumn).getByDisplayValue('Text');
    expect(
      within(leftColumn).queryByDisplayValue('Image and Text Grid'),
    ).toBeNull();
    within(rightColumn).getByDisplayValue('Image and Text Grid');
    expect(within(rightColumn).queryByDisplayValue('Text')).toBeNull();

    const reverseButton = screen.getByText(/Reverse columns/);
    await user.click(reverseButton);

    // assert the screen updated appropriately
    within(leftColumn).getByDisplayValue('Image and Text Grid');
    expect(within(leftColumn).queryByDisplayValue('Text')).toBeNull();
    within(rightColumn).getByDisplayValue('Text');
    expect(
      within(rightColumn).queryByDisplayValue('Image and Text Grid'),
    ).toBeNull();

    // save the changes
    await user.click(screen.getByText('Save'));

    // assert the data was updated
    expect(mockOnSave).toHaveBeenCalledExactlyOnceWith(expectedData);
  });

  it('hides the alt text fields for decorative images', async () => {
    const initialData: Data = {
      displayName: '',
      columns: {
        left: defaultLayout('text'),
        right: {
          kind: 'imageGrid',
          featuredImage: {
            url: '',
            decorative: false,
            alt: 'this is featured image alttext',
            onClickUrl: '',
          },
          bottomImage: {
            url: '',
            decorative: false,
            alt: 'and the bottom image alttext',
            onClickUrl: '',
          },
          text: {
            content: '',
            alignment: 'start',
            fontSize: 'small',
            backgroundColor: '#FFFAF0',
            color: '#2F4F4F',
          },
          bottomRowOrder: 'imageText',
        },
        ratio: '9:3',
        order: 'leftAboveRight',
      },
      backgroundColor: '#FFFFFF',
    };

    const expectedData: Data = {
      displayName: '',
      columns: {
        left: defaultLayout('text'),
        right: {
          kind: 'imageGrid',
          featuredImage: {
            url: '',
            decorative: true,
            alt: '',
            onClickUrl: '',
          },
          bottomImage: {
            url: '',
            decorative: true,
            alt: '',
            onClickUrl: '',
          },
          text: {
            content: '',
            alignment: 'start',
            fontSize: 'small',
            backgroundColor: '#FFFAF0',
            color: '#2F4F4F',
          },
          bottomRowOrder: 'imageText',
        },
        ratio: '9:3',
        order: 'leftAboveRight',
      },
      backgroundColor: '#FFFFFF',
    };

    const { screen, mockOnSave, user } = specRender(initialData);

    // decorative images are unchecked in initial data, so alt text fields should be present
    expect(screen.queryAllByPlaceholderText('Alt text')).toHaveLength(2);

    const [featuredDecorativeCheck, bottomDecorativeCheck] =
      screen.queryAllByLabelText(/Decorative image/);

    // switch one to decorative
    await user.click(featuredDecorativeCheck);

    // one alt text field should have been hidden now
    expect(screen.queryAllByPlaceholderText('Alt text')).toHaveLength(1);

    // switch the other to decorative
    await user.click(bottomDecorativeCheck);

    // now no alt text fields should be visible
    expect(screen.queryAllByPlaceholderText('Alt text')).toHaveLength(0);

    // save the changes
    await user.click(screen.getByText('Save'));

    // assert the data was updated
    expect(mockOnSave).toHaveBeenCalledExactlyOnceWith(expectedData);
  });

  it('renders with embedded html column', async () => {
    const initialData: Data = {
      displayName: '',
      columns: {
        left: defaultLayout('lessonList'),
        right: {
          kind: 'rawHTML',
          html: '<marquee>AHAHA!</marquee>',
        },
        ratio: '5:7',
        order: 'rightAboveLeft',
      },
      backgroundColor: '#FFFFFF',
    };

    const expectedData: Data = {
      displayName: '',
      columns: {
        left: defaultLayout('lessonList'),
        right: {
          kind: 'rawHTML',
          html: '<embed src="https://tutorial.math.lamar.edu/pdf/Trig_Cheat_Sheet.pdf" type="application/pdf" />',
        },
        ratio: '5:7',
        order: 'rightAboveLeft',
      },
      backgroundColor: '#FFFFFF',
    };
    const { screen, mockOnSave, user } = specRender(initialData);

    screen.getByDisplayValue('Bulleted Lesson List');
    screen.getByDisplayValue('Raw HTML');
    screen.getByDisplayValue('<marquee>AHAHA!</marquee>');

    const displayNameInput = screen.getByLabelText(/Raw HTML/, {
      selector: 'textarea',
    });
    await user.clear(displayNameInput);
    await user.type(
      displayNameInput,
      '<embed src="https://tutorial.math.lamar.edu/pdf/Trig_Cheat_Sheet.pdf" type="application/pdf" />',
    );

    screen.getByText('Save').click();

    expect(mockOnSave).toHaveBeenCalledExactlyOnceWith(expectedData);
  });
});
