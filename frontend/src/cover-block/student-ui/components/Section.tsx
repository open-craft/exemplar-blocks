import type { InitData } from '../../types.ts';
import * as React from 'react';
import { Col, Container, Row } from '@openedx/paragon';

const SectionCover: React.FC<InitData> = (props) => (
  <Container
    fluid={true}
    className="section-cover px-0"
    data-testid="section-cover"
  >
    <Row className="g-0">
      <Col xs={12} lg={6} className="order-lg-2">
        <img
          className="section-block-image"
          src={props.media_url}
          alt={props.media_alt_text}
        />
      </Col>
      <Col xs={12} lg={6} className="align-content-center px-4 pt-5 order-lg-1">
        <div className="text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5">
          <div className="lead">{props.top_header}</div>
          <h1 className="display-1">{props.main_header}</h1>
          <p className="subtitle my-3">{props.subheader}</p>
          <p className="body">{props.description}</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default SectionCover;
