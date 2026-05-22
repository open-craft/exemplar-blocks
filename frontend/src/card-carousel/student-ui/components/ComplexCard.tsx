import type { PropsWithChildren } from 'react';
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
} from '../../types';
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

  switch (secondaryContent.kind) {
    case 'IMAGE':
      return (
        <>
          <Card.ImageCap
            src={(secondaryContent as ImageData).location}
            srcAlt={(secondaryContent as ImageData).altText}
          />
          {children}
        </>
      );
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

  const outerClass =
    orientation === 'HORIZONTAL'
      ? 'd-flex w-100'
      : 'd-flex flex-column h-100 justify-content-between';
  const innerClass =
    orientation === 'HORIZONTAL' ? 'flex-grow-1 w-50' : 'flex-grow-1';

  return (
    <div className={outerClass}>
      <div className={innerClass}>{children}</div>
      <div className={innerClass}>{secondaryContentElement}</div>
    </div>
  );
};

export default function ComplexCard({
  orientation,
  data,
  position,
}: ComplexCardProps) {
  return (
    <Card orientation={orientation.toLowerCase()}>
      <ContentLayout
        orientation={orientation}
        secondaryContent={data.secondaryContent}
      >
        <Card.Body
          className={
            data.secondaryContent?.kind === 'IMAGE' ? 'w-50 p-3' : 'p-3'
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
            <Card.Section className="d-flex justify-content-end">
              <Button variant="accent" className="rounded-pill px-6">
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
