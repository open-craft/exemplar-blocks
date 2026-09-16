import * as React from 'react';
import { Col, Row } from '@openedx/paragon';
import { type CoverBlockFields, ImagePosition } from '../../apiTypes.ts';

const SectionCover: React.FC<CoverBlockFields> = (props) => {
  const imageOnLeft = props.image_position === ImagePosition.left;
  const layoutClass = imageOnLeft
    ? 'section-cover--image-left'
    : 'section-cover--image-right';
  return (
    <div className={`section-cover ${layoutClass}`} data-testid="section-cover">
      <Row className="section-cover-layout">
        <Col xs={12} lg={5} className="section-cover-image-column">
          <img
            className="section-block-image"
            src={props.media_url}
            alt={props.media_alt_text}
          />
        </Col>
        <Col xs={12} lg={5} className="section-cover-text-column">
          <div className="section-cover-text-content">
            <div className="section-cover-top-header">{props.top_header}</div>
            <h2 className="section-cover-main-header">{props.main_header}</h2>
            <h5 className="section-cover-subheader">{props.subheader}</h5>
            <p className="section-cover-description">{props.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SectionCover;
