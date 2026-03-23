import type { InitData } from '../../types.ts';
import * as React from 'react';
import { Col, Container, Row } from '@openedx/paragon';
import { deriveStyles } from '../../lib/utils.ts';

const Separator: React.FC<InitData> = (props) => {
  const styles = deriveStyles(props);
  return (
    <Container
      fluid={true}
      className="separator-cover px-0"
      data-testid="separator"
    >
      <div className="separator-cover-image-container">
        <img
          className="separator-cover-image"
          src={props.media_url}
          alt={props.media_alt_text}
        />
      </div>
      <Row className="text-container">
        <Col xs={12} className="order-lg-2 align-content-center text-center">
          <div className="text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5">
            <div className="lead" style={styles.top_header}>
              {props.top_header}
            </div>
            <h1
              className="display-1 d-inline-block text-center"
              style={styles.main_header}
            >
              {props.main_header}
            </h1>
            <p className="subtitle my-3 text-center" style={styles.subheader}>
              {props.subheader}
            </p>
            <p className="body" style={styles.description}>
              {props.description}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Separator;
