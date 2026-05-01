import { render, screen } from '../../tests-utils';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type InitData } from '../../../types';
import ContentHighlightForm from './ContentHiglightForm';

const makeInitData = (
  title = '',
  subtitle = '',
  description = '',
): InitData => ({
  cards: [
    {
      id: 1,
      name: '',
      title: '',
      secondaryContent: {
        kind: 'CONTENT_HIGHLIGHT',
        title,
        subtitle,
        description,
      },
    },
  ],
  displayName: 'Test',
  orientation: 'HORIZONTAL',
});

const ContentHighlightFormWithContext = ({
  title = '',
  subtitle = '',
  description = '',
} = {}) => (
  <Formik
    initialValues={makeInitData(title, subtitle, description)}
    onSubmit={() => {}}
  >
    <ContentHighlightForm cardIndex={0} />
  </Formik>
);

describe('ContentHighlightForm', () => {
  it('renders Title, Subtitle, and Description fields', () => {
    render(<ContentHighlightFormWithContext />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('shows provided values', () => {
    render(
      <ContentHighlightFormWithContext
        title="Test Title"
        subtitle="Test Subtitle"
        description="Test Description"
      />,
    );
    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveValue(
      'Test Title',
    );
    expect(screen.getByRole('textbox', { name: 'Subtitle' })).toHaveValue(
      'Test Subtitle',
    );
    expect(screen.getByRole('textbox', { name: 'Description' })).toHaveValue(
      'Test Description',
    );
  });
});
