import * as React from 'react';
import { Col, Row } from '@openedx/paragon';
import { deriveStyles } from '../../lib/utils.ts';
import type { CoverBlockFields } from '../../apiTypes.ts';

const Separator: React.FC<CoverBlockFields> = (props) => {
  const styles = deriveStyles(props);
  return (
    <div className="separator-cover" data-testid="separator">
      <div className="separator-cover-image-container">
        <img
          className="separator-cover-image"
          src={props.media_url}
          alt={props.media_alt_text}
        />
      </div>
      <Row className="separator-cover-content-row">
        <Col
          xs={12}
          md={10}
          lg={8}
          xl={6}
          className="separator-cover-content-column"
        >
          <div className="separator-cover-text-content">
            <div
              className="separator-cover-top-header"
              style={styles.top_header}
            >
              {props.top_header}
            </div>
            <h1
              className="separator-cover-main-header"
              style={styles.main_header}
            >
              {props.main_header}
            </h1>
            <h4 className="separator-cover-subheader" style={styles.subheader}>
              {props.subheader}
            </h4>
            <p
              className="separator-cover-description"
              style={styles.description}
            >
              {props.description}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Separator;
