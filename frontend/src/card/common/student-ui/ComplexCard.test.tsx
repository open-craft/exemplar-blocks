import { render, screen } from '@opencraft/xblock-react-utils/testing';
import { describe, it, expect } from 'vitest';
import ComplexCard, { ContentLayout } from './ComplexCard';
import type {
  ContentHighlightData,
  HoverListData,
  ImageData,
  RichListData,
} from '@/card/common/types';

// Tests for the different card types
describe('ComplexCard — IMAGE type', () => {
  it('renders Card.ImageCap with the correct src and alt', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'image card',
          id: 1,
          title: 'Test',
          secondaryContent: {
            kind: 'IMAGE',
            location: '/img.jpg',
            altText: 'Test image',
          },
        }}
      />,
    );
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('src', '/img.jpg');
  });

  it('renders the image as a card background when enabled', () => {
    const { container } = render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'background image card',
          id: 1,
          title: 'Test',
          secondaryContent: {
            kind: 'IMAGE',
            location: '/img.jpg',
            altText: 'Test image',
            useAsBackground: true,
          },
        }}
      />,
    );
    const card = container.querySelector('.complex-card--image-background');
    expect(card).toBeInTheDocument();
    expect(card).toHaveStyle('--ccblk-card-background-image: url("/img.jpg")');
    expect(screen.queryByAltText('Test image')).not.toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

describe('ComplexCard — CONTENT_HIGHLIGHT type', () => {
  it('renders the ContentHighlight component', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'content hightlight card',
          id: 1,
          title: 'Test',
          secondaryContent: {
            kind: 'CONTENT_HIGHLIGHT',
            title: 'CH Title',
            subtitle: 'CH Sub',
            description: 'CH Desc',
          },
        }}
      />,
    );
    expect(screen.getByText('CH Title')).toBeInTheDocument();
    expect(screen.getByText('CH Sub')).toBeInTheDocument();
    expect(screen.getByText('CH Desc')).toBeInTheDocument();
  });
});

describe('ComplexCard — RICH_LIST type', () => {
  it('renders the RichList component', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'rich list',
          id: 1,
          title: 'Test',
          secondaryContent: {
            kind: 'RICH_LIST',
            items: [
              { icon: 'star', title: 'Item', description: 'Description' },
            ],
          },
        }}
      />,
    );
    expect(screen.getByText('star')).toBeVisible();
    expect(screen.getByText('Item')).toBeVisible();
    expect(screen.getByText('Description')).toBeVisible();
  });
});

describe('ComplexCard — HOVER_LIST type', () => {
  it('renders the HoverList component inside Card.Body', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'hover list',
          id: 1,
          title: 'Test',
          secondaryContent: {
            kind: 'HOVER_LIST',
            items: [{ description: 'Item', hoverContent: 'Hover' }],
          },
        }}
      />,
    );
    expect(screen.getByText('Item')).toBeVisible();
    expect(screen.getByText('Hover')).toBeInTheDocument();
  });
});

// Tests for the ContentLayout

describe('ContentLayout', () => {
  const chContent: ContentHighlightData = {
    kind: 'CONTENT_HIGHLIGHT',
    title: 'CH Title',
    subtitle: 'CH Sub',
    description: 'CH Desc',
  };
  const rlContent: RichListData = { kind: 'RICH_LIST', items: [] };
  const hl: HoverListData = { kind: 'HOVER_LIST', items: [] };
  const imgContent: ImageData = {
    kind: 'IMAGE',
    location: '/img.jpg',
    altText: 'Alt Image Content',
  };
  const backgroundImgContent: ImageData = {
    ...imgContent,
    useAsBackground: true,
  };

  it('renders Card.ImageCap and children for IMAGE type without a layout wrapper', () => {
    const { container } = render(
      <ContentLayout orientation="HORIZONTAL" secondaryContent={imgContent}>
        <span>child component</span>
      </ContentLayout>,
    );
    expect(screen.getByAltText('Alt Image Content')).toBeInTheDocument();
    expect(screen.getByText('child component')).toBeInTheDocument();
    expect(container.querySelector('.row')).not.toBeInTheDocument();
  });

  it('renders children directly without Card.ImageCap for background IMAGE type', () => {
    render(
      <ContentLayout
        orientation="HORIZONTAL"
        secondaryContent={backgroundImgContent}
      >
        <span>child component</span>
      </ContentLayout>,
    );
    expect(screen.queryByAltText('Alt Image Content')).not.toBeInTheDocument();
    expect(screen.getByText('child component')).toBeInTheDocument();
  });

  it('uses the horizontal design layout for CONTENT_HIGHLIGHT', () => {
    const { container } = render(
      <ContentLayout orientation="HORIZONTAL" secondaryContent={chContent}>
        <span />
      </ContentLayout>,
    );
    expect(
      container.querySelector(
        '.complex-card-layout.complex-card-layout--horizontal',
      ),
    ).toBeInTheDocument();
  });

  it('uses the vertical design layout for CONTENT_HIGHLIGHT', () => {
    const { container } = render(
      <ContentLayout orientation="VERTICAL" secondaryContent={chContent}>
        <span />
      </ContentLayout>,
    );
    expect(
      container.querySelector(
        '.complex-card-layout.complex-card-layout--vertical',
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.complex-card-layout-panel'),
    ).toBeInTheDocument();
  });

  it('uses the horizontal design layout for RICH_LIST', () => {
    const { container } = render(
      <ContentLayout orientation="HORIZONTAL" secondaryContent={rlContent}>
        <span />
      </ContentLayout>,
    );
    expect(
      container.querySelector(
        '.complex-card-layout.complex-card-layout--horizontal',
      ),
    ).toBeInTheDocument();
  });

  it('uses the vertical design layout for RICH_LIST', () => {
    const { container } = render(
      <ContentLayout orientation="VERTICAL" secondaryContent={rlContent}>
        <span />
      </ContentLayout>,
    );
    expect(
      container.querySelector(
        '.complex-card-layout.complex-card-layout--vertical',
      ),
    ).toBeInTheDocument();
  });

  it('renders children directly without a layout wrapper for HOVER_LIST (fallback)', () => {
    const { container } = render(
      <ContentLayout orientation="HORIZONTAL" secondaryContent={hl}>
        <span data-testid="child" />
      </ContentLayout>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(container.querySelector('.row')).not.toBeInTheDocument();
    expect(container.querySelector('.d-flex')).not.toBeInTheDocument();
  });
});

// Tests for the card's content itself
describe('ComplexCard — card content', () => {
  const imageData: ImageData = {
    kind: 'IMAGE',
    location: '/img.jpg',
    altText: 'Alt',
  };

  it('renders a badge when position is provided', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'image card',
          id: 1,
          title: 'My Card Title',
          secondaryContent: imageData,
        }}
        position="1/3"
      />,
    );
    expect(screen.getByText('1/3')).toBeInTheDocument();
  });

  it('renders tittle, subtitle and description', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'image data',
          id: 1,
          title: 'My Card Title',
          subtitle: 'Subtitle Text',
          description: 'Card description',
          secondaryContent: imageData,
        }}
      />,
    );
    expect(screen.getByText('My Card Title')).toBeVisible();
    expect(screen.getByText('Subtitle Text')).toBeVisible();
    expect(screen.getByText('Card description')).toBeVisible();
  });

  it('renders CTA button when ctaLabel and ctaLink are both provided', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'image data',
          id: 1,
          title: 'Title',
          ctaLabel: 'Start Now',
          ctaLink: '/start',
          secondaryContent: imageData,
        }}
      />,
    );
    expect(screen.getByText('Start Now')).toBeInTheDocument();
  });

  it('does not render CTA button when ctaLink is missing', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'image card',
          id: 1,
          title: 'Title',
          ctaLabel: 'Start Now',
          secondaryContent: imageData,
        }}
      />,
    );
    expect(screen.queryByTestId('cta-button')).not.toBeInTheDocument();
  });

  it('does not render CTA button when ctaLabel is missing', () => {
    render(
      <ComplexCard
        orientation="HORIZONTAL"
        data={{
          name: 'image card',
          id: 1,
          title: 'Title',
          ctaLink: '/start',
          secondaryContent: imageData,
        }}
      />,
    );
    expect(screen.queryByTestId('cta-button')).not.toBeInTheDocument();
  });
});
