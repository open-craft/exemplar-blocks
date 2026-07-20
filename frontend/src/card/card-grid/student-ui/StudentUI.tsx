import { Col, Container, Row } from '@openedx/paragon';
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
    <div
      style={{ backgroundColor: backgroundColor }}
      className="card-grid-xblock py-4"
    >
      <Container>
        <Row>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="col"
          ></div>
        </Row>
        <Row>
          {cards.map((c, i) => (
            <Col {...sizes} className="d-flex my-3" {...(i === 0 && offset)}>
              <ComplexCard
                orientation={orientation}
                data={c}
                position="" // disable the numbering that appears in carousel
                key={i}
              />
            </Col>
          ))}
        </Row>
        <Row className="my-4">
          <div
            dangerouslySetInnerHTML={{ __html: footerDescription }}
            className="col"
          ></div>
        </Row>
      </Container>
    </div>
  );
}

export default StudentUI;
