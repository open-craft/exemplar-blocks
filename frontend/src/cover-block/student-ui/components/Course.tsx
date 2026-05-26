import * as React from 'react';
import { Col, Container, Row } from '@openedx/paragon';
import { deriveStyles } from '../../lib/utils.ts';
import type { CoverBlockFields } from '../../apiTypes.ts';

const CourseCover: React.FC<CoverBlockFields> = (props) => {
  const styles = deriveStyles(props);
  return (
    <Container
      fluid={true}
      className="course-cover position-relative px-0"
      data-testid="course-cover"
    >
      <div className="course-cover-image-container position-absolute w-100 h-100">
        <img
          className="course-cover-image w-100 h-100"
          src={props.media_url}
          alt={props.media_alt_text}
        />
      </div>
      <Row className="h-100 mx-0">
        <Col
          xs={12}
          md={10}
          lg={6}
          xl={5}
          className="d-flex align-items-center order-lg-2 px-4 px-sm-5 px-lg-5 ml-lg-4"
        >
          <div className="text-container w-100 pl-5">
            <div className="text-content w-100 mw-sm ml-lg-5">
              <h2
                className="lead font-weight-bold mb-3"
                style={styles.top_header}
              >
                {props.top_header}
              </h2>
              <h2 className="font-weight-bold mb-3" style={styles.main_header}>
                {props.main_header}
              </h2>
              <h5
                className="subtitle h5 font-weight-bold mb-3 w-100 mw-xs"
                style={styles.subheader}
              >
                {props.subheader}
              </h5>
              <p className="body mb-0 w-100 mw-xs" style={styles.description}>
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
