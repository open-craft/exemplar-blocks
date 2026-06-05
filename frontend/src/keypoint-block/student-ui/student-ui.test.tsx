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

describe('StudentUi', () => {
  describe('rendering with full data', () => {
    it('renders the header text', () => {
      render(
        <StudentUi
          header="Key Concepts"
          keypoints={sampleKeypoints}
          buttonText="Glossary"
          buttonLink="https://example.com/glossary"
          backgroundColor="#FFF"
        />,
      );
      expect(screen.getByText('Key Concepts')).toBeInTheDocument();
    });

    it('renders all keypoint labels and descriptions', () => {
      render(
        <StudentUi
          header="Key Concepts"
          keypoints={sampleKeypoints}
          buttonText="Glossary"
          buttonLink="https://example.com/glossary"
          backgroundColor="#FFF"
        />,
      );
      sampleKeypoints.forEach((kp) => {
        expect(screen.getByText(kp.keypoint)).toBeInTheDocument();
        expect(screen.getByText(kp.description)).toBeInTheDocument();
      });
    });

    it('renders the correct number of keypoint items', () => {
      render(
        <StudentUi
          header="Key Concepts"
          keypoints={sampleKeypoints}
          buttonText="Glossary"
          buttonLink="https://example.com/glossary"
          backgroundColor="#FFF"
        />,
      );
      const items = screen.getAllByRole('heading', { level: 4 });
      expect(items).toHaveLength(3);
    });

    it('renders the action button with correct attributes', () => {
      render(
        <StudentUi
          header="Key Concepts"
          keypoints={sampleKeypoints}
          buttonText="Glossary"
          buttonLink="https://example.com/glossary"
          backgroundColor="#FFF"
        />,
      );
      const link = screen.getByText('Glossary');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://example.com/glossary');
    });
  });

  describe('conditional rendering', () => {
    it('does not render the header when it is empty', () => {
      render(
        <StudentUi
          header=""
          keypoints={sampleKeypoints}
          buttonText="Glossary"
          buttonLink="https://example.com/glossary"
          backgroundColor="#FFF"
        />,
      );
      expect(
        screen.queryByRole('heading', { level: 2 }),
      ).not.toBeInTheDocument();
    });

    it('does not render the action button when buttonText is empty', () => {
      render(
        <StudentUi
          header="Key Concepts"
          keypoints={sampleKeypoints}
          buttonText=""
          buttonLink="https://example.com/glossary"
          backgroundColor="#FFF"
        />,
      );
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('does not render the action button when buttonLink is empty', () => {
      render(
        <StudentUi
          header="Key Concepts"
          keypoints={sampleKeypoints}
          buttonText="Glossary"
          buttonLink=""
          backgroundColor="#FFF"
        />,
      );
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('renders an empty grid when keypoints is empty', () => {
      const { container } = render(
        <StudentUi
          header="Key Concepts"
          keypoints={[]}
          buttonText="Glossary"
          buttonLink="https://example.com/glossary"
          backgroundColor="#FFF"
        />,
      );
      const grid = container.querySelector('.keypoints-card-grid');
      expect(grid).toBeInTheDocument();
      expect(grid!.children).toHaveLength(0);
    });
  });
});
