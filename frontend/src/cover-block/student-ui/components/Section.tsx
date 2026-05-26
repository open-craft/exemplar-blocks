import * as React from 'react';
import { Col, Container, Row } from '@openedx/paragon';
import { type CoverBlockFields, ImagePosition } from '../../apiTypes.ts';

const SectionCover: React.FC<CoverBlockFields> = (props) => {
  const imageOnLeft = props.image_position === ImagePosition.left;
  const imageOrderClass = imageOnLeft ? 'order-lg-1' : 'order-lg-2';
  const textOrderClass = imageOnLeft ? 'order-lg-2' : 'order-lg-1';
  const paddingClass = imageOnLeft ? 'pl-lg-5' : 'pr-lg-5';
  return (
    <Container
      fluid={false}
      className="section-cover px-md-0 px-2"
      data-testid="section-cover"
    >
      <Row className="g-0 justify-content-center align-items-center">
        <Col
          xs={12}
          lg={5}
          className={`${imageOrderClass} d-flex justify-content-center px-3 px-sm-2 py-5`}
        >
          <img
            className="section-block-image w-100 mx-auto d-block"
            src={props.media_url}
            alt={props.media_alt_text}
          />
        </Col>
        <Col
          xs={12}
          lg={5}
          className={`${textOrderClass} d-flex align-items-center py-5 px-3 px-sm-5 px-lg-0`}
        >
          <div className={`text-content w-100 mw-xs ${paddingClass}`}>
            <div className="lead h4 font-weight-bold mb-3">
              {props.top_header}
            </div>
            <h2 className="font-weight-bold mb-4">{props.main_header}</h2>
            <h5 className="subtitle font-weight-bold mb-4 w-100 mw-xs">
              {props.subheader}
            </h5>
            <p className="body mb-0 w-100 mw-xs">{props.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionCover;
