import type { PropsWithChildren } from "react";
import Badge from "@openedx/paragon/dist/Badge";
import Button from "@openedx/paragon/dist/Button";
// @ts-expect-error The Card component is defined in a JSX file & lacks types.
import Card from "@openedx/paragon/dist/Card";

import { type CardData, CardType, type ContentHighlightData, type RichListData, type HoverListData, type ImageData, Orientation} from "../../types";
import { ContentHighlight } from "./ContentHighlight";
import { RichList } from "./RichList";
import { HoverList } from "./HoverList";
import "./ComplexCard.css";

interface ComplexCardProps {
  orientation: Orientation,
  data: CardData
  position?: string
}

interface ContentLayoutProps {
  cardType: CardType,
  orientation: Orientation,
  secondaryContent: RichListData | ContentHighlightData | ImageData
}

export const ContentLayout = ({ cardType, orientation, secondaryContent, children }: PropsWithChildren<ContentLayoutProps>) => {
  let secondaryContentElement = null;

  switch (cardType) {
    case CardType.IMAGE: return (<>
      <Card.ImageCap
        src={(secondaryContent as ImageData).location}
        srcAlt={(secondaryContent as ImageData).altText}
      />
      {children}
    </>
    );
    case CardType.CONTENT_HIGHLIGHT:
      secondaryContentElement = <ContentHighlight {...secondaryContent as ContentHighlightData} orientation={orientation} />;
      break;
    case CardType.RICH_LIST:
      secondaryContentElement = <RichList {...secondaryContent as RichListData} />;
      break;
    // The HOVER_LIST's contents are rendered as a part of the primary content itself.
    case CardType.HOVER_LIST:
    default: return children;
  }

  const outerClass = (orientation === Orientation.HORIZONTAL) ? "row" : "d-flex flex-column h-100 justify-content-between";
  const innerClass = (orientation === Orientation.HORIZONTAL) ? "col" : "flex-grow-1";

  return (
    <div className={outerClass}>
      <div className={innerClass}>
        {children}
      </div>
      <div className={innerClass}>
        {secondaryContentElement}
      </div>
    </div>
  );
}

export default function ComplexCard({ orientation, data, position }: ComplexCardProps) {

  return (
    <Card orientation={orientation.toLowerCase()}>
      <ContentLayout
        orientation={orientation}
        cardType={data.cardType}
        secondaryContent={data.secondaryContent as RichListData | ContentHighlightData | ImageData}
      >
          <Card.Body>
            {position &&
              <div className="card-badge rounded-pill">
                <Badge variant="primary" aria-label={position}>{position}</Badge>
              </div>
            }
            <Card.Header title={data.title} subtitle={data.subtitle} />
            {data.description &&
              <Card.Section>
                { data.description }
              </Card.Section>}
            {(data.ctaLabel && data.ctaLink) && (
              <Card.Section>
                <Button variant="primary">{ data.ctaLabel }</Button>
              </Card.Section>
            )}
            {
              data.cardType === CardType.HOVER_LIST && (
                <Card.Section>
                  <HoverList {...data.secondaryContent as HoverListData} />
                </Card.Section>
              )
            }
          </Card.Body>
      </ContentLayout>
    </Card>
  );
}
