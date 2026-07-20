import { render, screen } from '@opencraft/xblock-react-utils/testing';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import { describe, it, expect, vi } from 'vitest';
import StudentUI from './StudentUI';
import { type CardData } from '@/card/common/types';
import type { InitData } from '@/card/card-grid/types';

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

const makeInitData = (overrides: Partial<InitData> = {}): InitData => ({
  cards: mockCards,
  displayName: 'My Card Grid',
  description: 'Test description',
  orientation: 'VERTICAL',
  backgroundColor: '#ffffff',
  footerDescription: 'Footer goes here',
  ...overrides,
});

describe('StudentUI', () => {
  it('renders the description', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={makeInitData({
          description: 'My test description for render.',
        })}
      />,
    );
    expect(
      screen.getByText('My test description for render.'),
    ).toBeInTheDocument();
  });

  it('renders one card per card in initData', () => {
    render(<StudentUI runtime={mockRuntime} initData={makeInitData()} />);
    expect(screen.getAllByText(/Card \d/)).toHaveLength(3);
  });

  it('renders the footer description', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={makeInitData({ footerDescription: 'A helpful footer' })}
      />,
    );
    expect(screen.getByText('A helpful footer')).toBeInTheDocument();
  });

  it('applies the background color to the outer container', () => {
    const { container } = render(
      <StudentUI
        runtime={mockRuntime}
        initData={makeInitData({ backgroundColor: '#12FF23' })}
      />,
    );
    const wrapper = container.querySelector('.card-grid-xblock');
    expect(wrapper).toHaveStyle('background-color: rgb(18, 255, 35);');
  });

  it('uses three-column (lg) sizing for a VERTICAL layout', () => {
    const { container } = render(
      <StudentUI
        runtime={mockRuntime}
        initData={makeInitData({ orientation: 'VERTICAL' })}
      />,
    );
    expect(container.querySelectorAll('.col-lg-4').length).toBeGreaterThan(0);
    expect(container.querySelector('.col-lg-6')).not.toBeInTheDocument();
  });

  it('uses two-column (lg) sizing for a HORIZONTAL layout', () => {
    const { container } = render(
      <StudentUI
        runtime={mockRuntime}
        initData={makeInitData({ orientation: 'HORIZONTAL' })}
      />,
    );
    expect(container.querySelectorAll('.col-lg-6').length).toBeGreaterThan(0);
    expect(container.querySelector('.col-lg-4')).not.toBeInTheDocument();
  });

  it('renders no cards when the cards array is empty', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={makeInitData({ cards: [] })}
      />,
    );
    expect(screen.queryAllByText(/Card \d/)).toHaveLength(0);
  });

  it('renders without error when displayName and footerDescription are empty', () => {
    render(
      <StudentUI
        runtime={mockRuntime}
        initData={makeInitData({ displayName: '', footerDescription: '' })}
      />,
    );
    expect(screen.getAllByText(/Card \d/)).toHaveLength(3);
  });
});
