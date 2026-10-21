import { Col, Row } from '@openedx/paragon';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import ComplexCard from '@/card/common/student-ui/ComplexCard';
import type { InitData } from '@/card/card-grid/types';

interface StudentUIProps {
  runtime: XBlockRuntime;
  initData: InitData;
}

function StudentUI({
  initData: {
    cards,
    description,
    orientation,
    backgroundColor,
    footerDescription,
  },
}: StudentUIProps) {
  // 1 card for small screens
  // 2 cards for medium screens
  // 3 cards for large screens
  const sizes = { sm: 12, md: 6, lg: 4 };
  // Max of 2 cards if the layout is horizontal
  if (orientation === 'HORIZONTAL') {
    sizes.lg = 6;
  }

  let offset = {};
  if (cards.length === 1) {
    offset = {
      lg: { span: sizes.lg, offset: sizes.lg },
      md: { span: 6, offset: 3 },
    };
  } else if (cards.length == 2 && orientation !== 'HORIZONTAL') {
    offset = { lg: { span: sizes.lg, offset: sizes.lg / 2 } };
  }

  return (
    <div className="card-grid-xblock" style={{ backgroundColor }}>
      <div className="card-grid-container">
        <Row className="card-grid-description-row">
          <Col xs={12}>
            <div
              className="card-grid-description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Col>
        </Row>
        <Row className="card-grid-cards-row">
          {cards.map((c, i) => (
            <Col
              {...sizes}
              className="card-grid-card-column"
              {...(i === 0 && offset)}
              key={c.id ?? i}
            >
              <ComplexCard
                orientation={orientation}
                data={c}
                position="" // disable the numbering that appears in carousel
              />
            </Col>
          ))}
        </Row>
        <Row className="card-grid-footer-row">
          <Col xs={12}>
            <div
              className="card-grid-footer-description"
              dangerouslySetInnerHTML={{ __html: footerDescription }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default StudentUI;
