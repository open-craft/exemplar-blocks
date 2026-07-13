import { render, screen } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type InitData } from '../../../types';
import ImageForm from './ImageForm';

const makeInitData = (location = '', altText = ''): InitData => ({
  cards: [
    {
      id: 1,
      name: '',
      title: '',
      secondaryContent: { kind: 'IMAGE', location, altText },
    },
  ],
  displayName: 'Test',
  orientation: 'HORIZONTAL',
});

const ImageFormWithContext = ({ location = '', altText = '' } = {}) => (
  <Formik initialValues={makeInitData(location, altText)} onSubmit={() => {}}>
    <ImageForm cardIndex={0} />
  </Formik>
);

describe('ImageForm', () => {
  it('renders Image Source URL and Alt Text fields', () => {
    render(<ImageFormWithContext />);
    expect(screen.getByText('Image Source URL')).toBeInTheDocument();
    expect(screen.getByText('Alt Text')).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'Decorative Image' }),
    ).toBeInTheDocument();
  });

  it('shows provided values', () => {
    render(
      <ImageFormWithContext
        location="https://example.com/img.png"
        altText="A scenic mountain"
      />,
    );
    expect(screen.getByPlaceholderText('URL')).toHaveValue(
      'https://example.com/img.png',
    );
    expect(screen.getByPlaceholderText('Alt Text')).toHaveValue(
      'A scenic mountain',
    );
  });

  it('updates the formik data as expected', async () => {
    const user = userEvent.setup();
    render(<ImageFormWithContext />);

    const urlInput = screen.getByPlaceholderText('URL');
    const altInput = screen.getByPlaceholderText('Alt Text');
    await user.type(urlInput, 'https://example.com/test.jpg');
    await user.type(altInput, 'test alt text');

    expect(urlInput).toHaveValue('https://example.com/test.jpg');
    expect(altInput).toHaveValue('test alt text');
  });

  it('disables the alt text input when Decorative Image is checked', async () => {
    const user = userEvent.setup();
    render(<ImageFormWithContext />);
    const altTextInput = screen.getByPlaceholderText('Alt Text');
    expect(altTextInput).not.toBeDisabled();
    await user.click(
      screen.getByRole('checkbox', { name: 'Decorative Image' }),
    );
    expect(altTextInput).toBeDisabled();
  });

  it('clears the alt text value when Decorative Image is checked', async () => {
    const user = userEvent.setup();
    render(<ImageFormWithContext altText="A scenic mountain" />);
    await user.click(
      screen.getByRole('checkbox', { name: 'Decorative Image' }),
    );
    expect(screen.getByPlaceholderText('Alt Text')).toHaveValue('');
  });
});
