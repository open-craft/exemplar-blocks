import { render, screen } from '@opencraft/xblock-react-utils/testing';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import { describe, it, expect, vi } from 'vitest';
import StudentUI from './StudentUI';
import { type CarouselCardData } from '@/card/card-carousel/types';

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const mockCards: Array<CarouselCardData> = [
  {
    id: 1,
    name: 'Card 1',
    orientation: 'VERTICAL',
    title: 'Card 1',
    secondaryContent: { kind: 'IMAGE', location: '', altText: '' },
  },
  {
    id: 2,
    name: 'Card 2',
    orientation: 'HORIZONTAL',
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
    orientation: 'VERTICAL',
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
        }}
      />,
    );
    expect(screen.getAllByText(/Card \d/)).toHaveLength(3);
  });

  it('sets the configured background color on the outer container', () => {
    const { container } = render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'Test',
          backgroundColor: '#12FF23',
        }}
      />,
    );
    const wrapper = container.querySelector('.card-carousel-xblock');
    expect(wrapper).toHaveStyle('background-color: rgb(18, 255, 35);');
  });

  it('uses the design-system carousel container', () => {
    const { container } = render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'Test',
        }}
      />,
    );
    expect(
      container.querySelector('.card-carousel-container'),
    ).toBeInTheDocument();
  });

  it('renders each card with its own orientation', () => {
    const { container } = render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'Test',
        }}
      />,
    );
    expect(container.querySelectorAll('.pgn__card.horizontal')).toHaveLength(1);
  });

  it('uses horizontal carousel column sizes when any card is horizontal', () => {
    const { container } = render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'Test',
        }}
      />,
    );
    expect(container.querySelectorAll('.col-lg-10').length).toBeGreaterThan(0);
    expect(container.querySelector('.col-lg-6')).not.toBeInTheDocument();
  });

  it('uses vertical carousel column sizes when all cards are vertical', () => {
    const verticalCards = mockCards.map((card) => ({
      ...card,
      orientation: 'VERTICAL' as const,
    }));
    const { container } = render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: verticalCards,
          displayName: 'Test',
        }}
      />,
    );
    expect(container.querySelectorAll('.col-lg-6').length).toBeGreaterThan(0);
    expect(container.querySelector('.col-lg-10')).not.toBeInTheDocument();
  });

  it('renders cards with position indicators', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={{
          cards: mockCards,
          displayName: 'Test',
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
        }}
      />,
    );
    expect(screen.getAllByText(/Card \d/)).toHaveLength(3);
  });
});
