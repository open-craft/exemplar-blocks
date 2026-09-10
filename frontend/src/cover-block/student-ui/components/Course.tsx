import * as React from 'react';
import { Col, Row } from '@openedx/paragon';
import { deriveStyles } from '../../lib/utils.ts';
import type { CoverBlockFields } from '../../apiTypes.ts';

const CourseCover: React.FC<CoverBlockFields> = (props) => {
  const styles = deriveStyles(props);
  return (
    <div className="course-cover" data-testid="course-cover">
      <div className="course-cover-image-container">
        <img
          className="course-cover-image"
          src={props.media_url}
          alt={props.media_alt_text}
        />
      </div>
      <Row className="course-cover-content-row">
        <Col
          xs={12}
          md={10}
          lg={6}
          xl={5}
          className="course-cover-content-column"
        >
          <div className="course-cover-text-container">
            <div className="course-cover-text-content">
              <h2 className="course-cover-top-header" style={styles.top_header}>
                {props.top_header}
              </h2>
              <h2
                className="course-cover-main-header"
                style={styles.main_header}
              >
                {props.main_header}
              </h2>
              <h5 className="course-cover-subheader" style={styles.subheader}>
                {props.subheader}
              </h5>
              <p
                className="course-cover-description"
                style={styles.description}
              >
                {props.description}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CourseCover;
