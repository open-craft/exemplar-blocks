import { render, screen, waitFor } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type FormDataPartial, type Orientation } from '@/card/common/types';
import ImageForm from './ImageForm';

const makeInitData = ({
  location = '',
  altText = '',
  orientation,
  useAsBackground = false,
}: {
  location?: string;
  altText?: string;
  orientation?: Orientation;
  useAsBackground?: boolean;
} = {}): FormDataPartial => ({
  cards: [
    {
      id: 1,
      name: '',
      title: '',
      ...(orientation ? { orientation } : {}),
      secondaryContent: { kind: 'IMAGE', location, altText, useAsBackground },
    },
  ],
});

const ImageFormWithContext = ({
  location = '',
  altText = '',
  orientation,
  useAsBackground = false,
}: {
  location?: string;
  altText?: string;
  orientation?: Orientation;
  useAsBackground?: boolean;
} = {}) => (
  <Formik
    initialValues={makeInitData({
      location,
      altText,
      orientation,
      useAsBackground,
    })}
    onSubmit={() => {}}
  >
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
    expect(
      screen.getByRole('checkbox', { name: 'Use image as card background' }),
    ).toBeInTheDocument();
  });

  it('toggles the card background image option', async () => {
    const user = userEvent.setup();
    render(<ImageFormWithContext />);

    const checkbox = screen.getByRole('checkbox', {
      name: 'Use image as card background',
    });
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
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

  it('shows the horizontal card image size recommendation', () => {
    render(<ImageFormWithContext orientation="HORIZONTAL" />);
    expect(
      screen.getByText(/Recommended image size: 700 × 1200 px/),
    ).toBeInTheDocument();
  });

  it('shows the vertical card image size recommendation', () => {
    render(<ImageFormWithContext orientation="VERTICAL" />);
    expect(
      screen.getByText(/Recommended image size: 1200 × 300 px/),
    ).toBeInTheDocument();
  });

  it('does not show an image size recommendation without per-card orientation', () => {
    render(<ImageFormWithContext />);
    expect(
      screen.queryByText(/Recommended image size:/),
    ).not.toBeInTheDocument();
  });

  it('does not show the image size recommendation when image is used as background', () => {
    render(<ImageFormWithContext orientation="HORIZONTAL" useAsBackground />);
    expect(
      screen.queryByText(/Recommended image size:/),
    ).not.toBeInTheDocument();
  });

  it('hides the image size recommendation when image is changed to background', async () => {
    const user = userEvent.setup();
    render(<ImageFormWithContext orientation="HORIZONTAL" />);

    expect(
      screen.getByText(/Recommended image size: 700 × 1200 px/),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole('checkbox', { name: 'Use image as card background' }),
    );

    await waitFor(() =>
      expect(
        screen.queryByText(/Recommended image size:/),
      ).not.toBeInTheDocument(),
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
