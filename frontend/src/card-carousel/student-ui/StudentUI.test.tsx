import { render, screen } from '@opencraft/xblock-react-utils/testing';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import { describe, it, expect, vi } from 'vitest';
import StudentUI from './StudentUI';
import { type CardData } from '../types';

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const mockCards: Array<CardData> = [
  {
    id: 1,
    name: 'Card 1',
    title: 'Card 1',
    secondaryContent: { kind: 'IMAGE', location: '', altText: '' },
  },
  {
    id: 2,
    name: 'Card 2',
    title: 'Card 2',
    secondaryContent: {
      kind: 'RICH_LIST',
      items: [
        { icon: 'help', title: 'Hello', description: 'Testing Rich List' },
      ],
    },
  },
  {
    id: 3,
    name: 'Card 3',
    title: 'Card 3',
    secondaryContent: {
      kind: 'HOVER_LIST',
      items: [
        {
          description: 'Original',
          hoverContent: 'Hover Content',
          icon: 'thinking',
        },
      ],
    },
  },
];

describe('StudentUI', () => {
  it('renders a CardCarousel with displayName as aria-label', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'My Carousel',
          orientation: 'HORIZONTAL',
        }}
      />,
    );
    expect(screen.getByRole('region')).toHaveAttribute(
      'aria-label',
      'My Carousel',
    );
  });

  it('renders one ComplexCard per card in initData', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'Test',
          orientation: 'HORIZONTAL',
        }}
      />,
    );
    expect(screen.getAllByText(/Card \d/)).toHaveLength(3);
  });

  it('renders cards with position indicators', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'Test',
          orientation: 'HORIZONTAL',
        }}
      />,
    );
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
    expect(screen.getByText('2 / 3')).toBeInTheDocument();
    expect(screen.getByText('3 / 3')).toBeInTheDocument();
  });

  it('renders cards without position indicators when numbering is disabled', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'Test',
          orientation: 'HORIZONTAL',
          disableNumbering: true,
        }}
      />,
    );
    expect(screen.queryAllByText(/\d \/ \d/)).toHaveLength(0);
  });

  it('renders no cards when cards array is empty', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: [],
          displayName: 'Empty',
          orientation: 'VERTICAL',
        }}
      />,
    );
    expect(screen.queryAllByTestId('complex-card')).toHaveLength(0);
  });

  it('renders without error when displayName is empty', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: '',
          orientation: 'VERTICAL',
        }}
      />,
    );
    expect(screen.getAllByText(/Card \d/)).toHaveLength(3);
  });
});
