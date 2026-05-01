import { CardCarousel } from '@openedx/paragon';
import type { XBlockRuntime } from '../../types';
import { type InitData } from '../types';
import ComplexCard from './components/ComplexCard';

import './StudentUI.css';

interface StudentUIProps {
  runtime: XBlockRuntime;
  initData: InitData;
}

function StudentUI({
  initData: { cards, displayName, orientation, disableNumbering },
}: StudentUIProps) {
  const verticalCardSizes = { sm: 12, md: 8, lg: 6, xl: 6 };
  const horizontalCardSizes = { sm: 12, md: 10, lg: 10, xl: 11 };

  return (
    <CardCarousel
      ariaLabel={displayName}
      title={displayName ? <h3>{displayName}</h3> : ''}
      canScrollHorizontal={true}
      disableOpacityMasks={true}
      columnSizes={
        orientation === 'HORIZONTAL' ? horizontalCardSizes : verticalCardSizes
      }
    >
      {cards.map((c, i) => (
        <ComplexCard
          orientation={orientation}
          data={c}
          position={disableNumbering ? '' : `${i + 1} / ${cards.length}`}
          key={i}
        />
      ))}
    </CardCarousel>
  );
}

export default StudentUI;
