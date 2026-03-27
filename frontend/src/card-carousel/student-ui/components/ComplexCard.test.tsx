import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ComplexCard, { ContentLayout } from './ComplexCard';
import { CardType, Orientation } from '../../types';

// Tests for the different card types
describe('ComplexCard — IMAGE type', () => {
  it('renders Card.ImageCap with the correct src and alt', () => {
    render(
      <ComplexCard
        orientation={Orientation.HORIZONTAL}
        data={{
          title: 'Test',
          cardType: CardType.IMAGE,
          secondaryContent: { location: '/img.jpg', altText: 'Test image' },
        }}
      />
    );
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('src', '/img.jpg');
  });
});

describe('ComplexCard — CONTENT_HIGHLIGHT type', () => {
  it('renders the ContentHighlight component', () => {
    render(
      <ComplexCard
        orientation={Orientation.HORIZONTAL}
        data={{
          title: 'Test',
          cardType: CardType.CONTENT_HIGHLIGHT,
          secondaryContent: { title: 'CH Title', subtitle: 'CH Sub', description: 'CH Desc' },
        }}
      />
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
        orientation={Orientation.HORIZONTAL}
        data={{
          title: 'Test',
          cardType: CardType.RICH_LIST,
          secondaryContent: { items: [{ icon: 'star', title: 'Item', description: 'Description' }] },
        }}
      />
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
        orientation={Orientation.HORIZONTAL}
        data={{
          title: 'Test',
          cardType: CardType.HOVER_LIST,
          secondaryContent: { items: [{ description: 'Item', hoverContent: 'Hover' }] },
        }}
      />
    );
    expect(screen.getByText('Item')).toBeVisible();
    expect(screen.getByText('Hover')).toBeInTheDocument();
  });
});

// Tests for the ContentLayout

describe('ContentLayout', () => {
  const chContent = { title: 'CH Title', subtitle: 'CH Sub', description: 'CH Desc' };
  const rlContent = { items: [] };
  const imgContent = { location: '/img.jpg', altText: 'Alt Image Content' };

  it('renders Card.ImageCap and children for IMAGE type without a layout wrapper', () => {
    const { container } = render(
      <ContentLayout cardType={CardType.IMAGE} orientation={Orientation.HORIZONTAL} secondaryContent={imgContent}>
        <span>child component</span>
      </ContentLayout>
    );
    expect(screen.getByAltText('Alt Image Content')).toBeInTheDocument();
    expect(screen.getByText('child component')).toBeInTheDocument();
    expect(container.querySelector('.row')).not.toBeInTheDocument();
  });

  it('uses "row" outer class for CONTENT_HIGHLIGHT + horizontal', () => {
    const { container } = render(
      <ContentLayout cardType={CardType.CONTENT_HIGHLIGHT} orientation={Orientation.HORIZONTAL} secondaryContent={chContent}>
        <span />
      </ContentLayout>
    );
    expect(container.querySelector('.row')).toBeInTheDocument();
    expect(container.querySelector('.col')).toBeInTheDocument();
  });

  it('uses "d-flex flex-column" outer class for CONTENT_HIGHLIGHT + vertical', () => {
    const { container } = render(
      <ContentLayout cardType={CardType.CONTENT_HIGHLIGHT} orientation={Orientation.VERTICAL} secondaryContent={chContent}>
        <span />
      </ContentLayout>
    );
    expect(container.querySelector('.d-flex.flex-column')).toBeInTheDocument();
    expect(container.querySelector('.flex-grow-1')).toBeInTheDocument();
  });

  it('uses "row" outer class for RICH_LIST + horizontal', () => {
    const { container } = render(
      <ContentLayout cardType={CardType.RICH_LIST} orientation={Orientation.HORIZONTAL} secondaryContent={rlContent}>
        <span />
      </ContentLayout>
    );
    expect(container.querySelector('.row')).toBeInTheDocument();
  });

  it('uses "d-flex flex-column" outer class for RICH_LIST + vertical', () => {
    const { container } = render(
      <ContentLayout cardType={CardType.RICH_LIST} orientation={Orientation.VERTICAL} secondaryContent={rlContent}>
        <span />
      </ContentLayout>
    );
    expect(container.querySelector('.d-flex.flex-column')).toBeInTheDocument();
  });

  it('renders children directly without a layout wrapper for HOVER_LIST (fallback)', () => {
    const { container } = render(
      <ContentLayout cardType={CardType.HOVER_LIST} orientation={Orientation.HORIZONTAL} secondaryContent={rlContent}>
        <span data-testid="child" />
      </ContentLayout>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(container.querySelector('.row')).not.toBeInTheDocument();
    expect(container.querySelector('.d-flex')).not.toBeInTheDocument();
  });
});


// Tests for the card's content itself
describe('ComplexCard — card content', () => {
  const imageData = { location: '/img.jpg', altText: 'Alt' };

  it('renders a badge when position is provided', () => {
    render(
      <ComplexCard
        orientation={Orientation.HORIZONTAL}
        data={{ title: 'My Card Title', cardType: CardType.IMAGE, secondaryContent: imageData }}
        position='1/3'
      />
    );
    expect(screen.getByText('1/3')).toBeInTheDocument();
  });

  it('renders tittle, subtitle and description', () => {
    render(
      <ComplexCard
        orientation={Orientation.HORIZONTAL}
        data={{ title: 'My Card Title', subtitle: 'Subtitle Text',  description: 'Card description', cardType: CardType.IMAGE, secondaryContent: imageData }}
      />
    );
    expect(screen.getByText('My Card Title')).toBeVisible();
    expect(screen.getByText('Subtitle Text')).toBeVisible();
    expect(screen.getByText('Card description')).toBeVisible();
  });

  it('renders CTA button when ctaLabel and ctaLink are both provided', () => {
    render(
      <ComplexCard
        orientation={Orientation.HORIZONTAL}
        data={{
          title: 'Title',
          cardType: CardType.IMAGE,
          ctaLabel: 'Start Now',
          ctaLink: '/start',
          secondaryContent: imageData,
        }}
      />
    );
    expect(screen.getByText("Start Now")).toBeInTheDocument();
  });

  it('does not render CTA button when ctaLink is missing', () => {
    render(
      <ComplexCard
        orientation={Orientation.HORIZONTAL}
        data={{
          title: 'Title',
          cardType: CardType.IMAGE,
          ctaLabel: 'Start Now',
          secondaryContent: imageData,
        }}
      />
    );
    expect(screen.queryByTestId('cta-button')).not.toBeInTheDocument();
  });

  it('does not render CTA button when ctaLabel is missing', () => {
    render(
      <ComplexCard
        orientation={Orientation.HORIZONTAL}
        data={{
          title: 'Title',
          cardType: CardType.IMAGE,
          ctaLink: '/start',
          secondaryContent: imageData,
        }}
      />
    );
    expect(screen.queryByTestId('cta-button')).not.toBeInTheDocument();
  });
});
