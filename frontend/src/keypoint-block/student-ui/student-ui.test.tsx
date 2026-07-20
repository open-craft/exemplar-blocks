import { render, screen } from '@opencraft/xblock-react-utils/testing';
import { describe, it, expect } from 'vitest';
import StudentUi from './student-ui';
import { type KeyPoint } from '../type';

const sampleKeypoints: KeyPoint[] = [
  {
    keypoint: 'Fluid balance',
    description: 'The regulation of fluids within the body.',
  },
  {
    keypoint: 'Neural signaling',
    description: 'How neurons transmit signals across synapses.',
  },
  {
    keypoint: 'Membrane potential',
    description: 'The electrical charge difference across a cell membrane.',
  },
];

const defaultProps = {
  header: 'Key Concepts',
  keypoints: sampleKeypoints,
  summary: 'These concepts form a connected sequence.',
  buttonText: 'Glossary',
  buttonLink: 'https://example.com/glossary',
  backgroundColor: '#FFF',
};

function renderStudent(overrides: Partial<typeof defaultProps> = {}) {
  return render(<StudentUi {...defaultProps} {...overrides} />);
}

describe('StudentUi', () => {
  describe('rendering with full data', () => {
    it('renders the header text', () => {
      renderStudent();
      expect(screen.getByText('Key Concepts')).toBeInTheDocument();
    });

    it('renders all keypoint labels and descriptions', () => {
      renderStudent();
      sampleKeypoints.forEach((kp) => {
        expect(screen.getByText(kp.keypoint)).toBeInTheDocument();
        expect(screen.getByText(kp.description)).toBeInTheDocument();
      });
    });

    it('renders the correct number of keypoint items', () => {
      renderStudent();
      const items = screen.getAllByRole('heading', { level: 4 });
      expect(items).toHaveLength(3);
    });

    it('renders the summary text', () => {
      renderStudent();
      expect(
        screen.getByText('These concepts form a connected sequence.'),
      ).toBeInTheDocument();
    });

    it('renders the action button with correct attributes', () => {
      renderStudent();
      const link = screen.getByText('Glossary');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://example.com/glossary');
    });
  });

  describe('conditional rendering', () => {
    it('does not render the header when it is empty', () => {
      renderStudent({ header: '' });
      expect(
        screen.queryByRole('heading', { level: 2 }),
      ).not.toBeInTheDocument();
    });

    it('does not render the summary when it is empty', () => {
      const { container } = renderStudent({ summary: '' });
      expect(
        container.querySelector('.keypoints-summary'),
      ).not.toBeInTheDocument();
    });

    it('does not render the action button when buttonText is empty', () => {
      renderStudent({ buttonText: '' });
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('does not render the action button when buttonLink is empty', () => {
      renderStudent({ buttonLink: '' });
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('renders an empty grid when keypoints is empty', () => {
      const { container } = renderStudent({ keypoints: [] });
      const grid = container.querySelector('.keypoints-card-grid');
      expect(grid).toBeInTheDocument();
      expect(grid!.children).toHaveLength(0);
    });
  });
});
