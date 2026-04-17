import * as React from 'react';
import { Col, Container, Row } from '@openedx/paragon';
import { deriveStyles } from '../../lib/utils.ts';
import type { CoverBlockFields } from '../../apiTypes.ts';

const CourseCover: React.FC<CoverBlockFields> = (props) => {
  const styles = deriveStyles(props);
  return (
    <Container
      fluid={true}
      className="course-cover px-0"
      data-testid="course-cover"
    >
      <div className="course-cover-image-container">
        <img
          className="course-cover-image"
          src={props.media_url}
          alt={props.media_alt_text}
        />
      </div>
      <Row className="full-height">
        <Col xs={12} lg={6} className="align-content-center order-lg-2 px-4">
          <div className="text-container">
            <div className="text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5">
              <div className="lead" style={styles.top_header}>
                {props.top_header}
              </div>
              <h1 className="display-1" style={styles.main_header}>
                {props.main_header}
              </h1>
              <p className="subtitle my-3" style={styles.subheader}>
                {props.subheader}
              </p>
              <p className="body" style={styles.description}>
                {props.description}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseCover;
