import { render as originalRender, screen, type RenderOptions } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StudentUI from './StudentUI';
import { CardType, Orientation, type CardData } from '../types';
import type { XBlockRuntime } from '../../types';
import { IntlProvider } from 'react-intl';
import type { ReactElement, ReactNode } from 'react';

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn() };

const mockCards: Array<CardData> = [
  { title: 'Card 1', cardType: CardType.IMAGE, secondaryContent: { location: '', altText: '' }},
  { title: 'Card 2', cardType: CardType.RICH_LIST, secondaryContent: {items: [{icon: 'help', title: "Hello", description: "Testing Rich List"}]} },
  { title: 'Card 3', cardType: CardType.HOVER_LIST, secondaryContent: {items: [{description: "Original", hoverContent: "Hover Content", icon: "thinking"}]} },
];

// redefine render with React.IntlProvider as Paragon's CardCarousel expects it.
const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const Wrapper = ({ children }: {children: ReactNode}) => {
    return (
      <IntlProvider locale="en">
          {children}
      </IntlProvider>
    );
  };

  return originalRender(ui, { wrapper: Wrapper, ...options });
}

describe('StudentUI', () => {
  it('renders a CardCarousel with displayName as aria-label', () => {
    render(
      <StudentUI
      runtime={mockRuntime}
      initData={{ cards: mockCards, displayName: 'My Carousel', orientation: Orientation.HORIZONTAL }}
      />
    );
    expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'My Carousel');
  });

  it('renders one ComplexCard per card in initData', () => {
    render(
      <StudentUI
      runtime={mockRuntime}
      initData={{ cards: mockCards, displayName: 'Test', orientation: Orientation.HORIZONTAL }}
      />
    );
    expect(screen.getAllByText(/Card \d/)).toHaveLength(3);
  });

  it('renders cards with position indicators', () => {
    render(
      <StudentUI
      runtime={mockRuntime}
      initData={{ cards: mockCards, displayName: 'Test', orientation: Orientation.HORIZONTAL }}
      />
    );
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
  });

  it('renders cards without position indicators when numbering is disabled', () => {
    render(
      <StudentUI
      runtime={mockRuntime}
        initData={{
          cards: mockCards, displayName: 'Test', orientation: Orientation.HORIZONTAL, disableNumbering: true
        }}
      />
    );
    expect(screen.queryAllByText(/\d \/ \d/)).toHaveLength(0)
  });

  it('renders no cards when cards array is empty', () => {
    render(
      <StudentUI
      runtime={mockRuntime}
      initData={{ cards: [], displayName: 'Empty', orientation: Orientation.VERTICAL }}
      />
    );
    expect(screen.queryAllByTestId('complex-card')).toHaveLength(0);
  });

  it('renders without error when displayName is empty', () => {
    render(
      <StudentUI
      runtime={mockRuntime}
      initData={{ cards: mockCards, displayName: '', orientation: Orientation.VERTICAL }}
      />
    );
    expect(screen.getAllByText(/Card \d/)).toHaveLength(3);
  });
});
