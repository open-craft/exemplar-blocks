import { CardCarousel } from '@openedx/paragon';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import { type InitData } from '@/card/card-carousel/types';
import ComplexCard from '@/card/common/student-ui/ComplexCard';

interface StudentUIProps {
  runtime: XBlockRuntime;
  initData: InitData;
}

function StudentUI({
  initData: { cards, displayName, disableNumbering, backgroundColor },
}: StudentUIProps) {
  const verticalCardSizes = { sm: 12, md: 8, lg: 6, xl: 6 };
  const horizontalCardSizes = { sm: 12, md: 10, lg: 10, xl: 11 };
  let columnSizes: Record<string, number> = { sm: 12 };
  if (cards.length > 1) {
    // We need a columnSizes for CardCarousel
    // Hence, if we have a single horizontal card we set the carouse to be horizontal.
    // So that design looks presentable
    const hasHorizontalCard = cards.some(
      (card) => card.orientation === 'HORIZONTAL',
    );
    columnSizes = hasHorizontalCard ? horizontalCardSizes : verticalCardSizes;
  }

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="card-carousel-xblock py-6"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <CardCarousel
          ariaLabel={displayName}
          title={displayName ? <h3>{displayName}</h3> : ''}
          canScrollHorizontal={true}
          disableOpacityMasks={true}
          columnSizes={columnSizes}
        >
          {cards.map((c, i) => (
            <ComplexCard
              orientation={c.orientation}
              data={c}
              position={disableNumbering ? '' : `${i + 1} / ${cards.length}`}
              key={i}
            />
          ))}
        </CardCarousel>
      </div>
    </div>
  );
}

export default StudentUI;
