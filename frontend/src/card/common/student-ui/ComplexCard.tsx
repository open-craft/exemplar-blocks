import type { CSSProperties, PropsWithChildren } from 'react';
import Badge from '@openedx/paragon/dist/Badge';
import Button from '@openedx/paragon/dist/Button';
// @ts-expect-error The Card component is defined in a JSX file & lacks types.
import Card from '@openedx/paragon/dist/Card';

import {
  type CardData,
  type ContentHighlightData,
  type RichListData,
  type HoverListData,
  type ImageData,
  type Orientation,
} from '@/card/common/types';
import { ContentHighlight } from './ContentHighlight';
import { RichList } from './RichList';
import { HoverList } from './HoverList';

interface ComplexCardProps {
  orientation: Orientation;
  data: CardData;
  position?: string;
}

interface ContentLayoutProps {
  orientation: Orientation;
  secondaryContent: Card['secondaryContent'];
}

export const ContentLayout = ({
  orientation,
  secondaryContent,
  children,
}: PropsWithChildren<ContentLayoutProps>) => {
  let secondaryContentElement = null;

  switch (secondaryContent?.kind) {
    case 'IMAGE': {
      const imageContent = secondaryContent as ImageData;
      if (imageContent.useAsBackground) {
        return children;
      }
      return (
        <>
          <Card.ImageCap
            src={imageContent.location}
            srcAlt={imageContent.altText}
          />
          {children}
        </>
      );
    }
    case 'CONTENT_HIGHLIGHT':
      secondaryContentElement = (
        <ContentHighlight
          {...(secondaryContent as ContentHighlightData)}
          orientation={orientation}
        />
      );
      break;
    case 'RICH_LIST':
      secondaryContentElement = (
        <RichList {...(secondaryContent as RichListData)} />
      );
      break;
    // The HOVER_LIST's contents are rendered as a part of the primary content itself.
    case 'HOVER_LIST':
    default:
      return children;
  }

  const layoutClass =
    orientation === 'HORIZONTAL'
      ? 'complex-card-layout complex-card-layout--horizontal'
      : 'complex-card-layout complex-card-layout--vertical';

  return (
    <div className={layoutClass}>
      <div className="complex-card-layout-panel complex-card-layout-panel--primary">
        {children}
      </div>
      <div className="complex-card-layout-panel complex-card-layout-panel--secondary">
        {secondaryContentElement}
      </div>
    </div>
  );
};

export default function ComplexCard({
  orientation,
  data,
  position,
}: ComplexCardProps) {
  const imageContent =
    data.secondaryContent?.kind === 'IMAGE'
      ? (data.secondaryContent as ImageData)
      : null;
  const useImageBackground = imageContent?.useAsBackground ?? false;
  const cardStyle = useImageBackground
    ? ({
        '--ccblk-card-background-image': `url("${imageContent?.location}")`,
      } as CSSProperties)
    : undefined;

  return (
    <Card
      orientation={orientation.toLowerCase()}
      className={
        'complex-card' +
        (useImageBackground ? ' complex-card--image-background' : '')
      }
      style={cardStyle}
    >
      <ContentLayout
        orientation={orientation}
        secondaryContent={data.secondaryContent}
      >
        <Card.Body
          className={
            data.secondaryContent?.kind === 'IMAGE' &&
            orientation === 'HORIZONTAL' &&
            !useImageBackground
              ? 'complex-card-body complex-card-body--horizontal-image'
              : 'complex-card-body'
          }
        >
          {position && (
            <div className="card-badge">
              <Badge
                variant="primary"
                aria-label={position}
                className="rounded-pill"
              >
                {position}
              </Badge>
            </div>
          )}
          <Card.Header title={data.title} subtitle={data.subtitle} />
          {data.description && <Card.Section>{data.description}</Card.Section>}
          {data.ctaLabel && data.ctaLink && (
            <Card.Section className="complex-card-cta-section">
              <Button
                variant="accent"
                className="complex-card-cta-button rounded-pill"
                href={data.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>{data.ctaLabel}</strong>
              </Button>
            </Card.Section>
          )}
          {data.secondaryContent?.kind === 'HOVER_LIST' && (
            <Card.Section>
              <HoverList {...(data.secondaryContent as HoverListData)} />
            </Card.Section>
          )}
        </Card.Body>
      </ContentLayout>
    </Card>
  );
}
