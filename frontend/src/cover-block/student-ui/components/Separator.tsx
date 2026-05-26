import * as React from 'react';
import { Col, Container, Row } from '@openedx/paragon';
import { deriveStyles } from '../../lib/utils.ts';
import type { CoverBlockFields } from '../../apiTypes.ts';

const Separator: React.FC<CoverBlockFields> = (props) => {
  const styles = deriveStyles(props);
  return (
    <Container
      fluid={true}
      className="separator-cover position-relative px-0"
      data-testid="separator"
    >
      <div className="separator-cover-image-container position-absolute w-100 h-100">
        <img
          className="separator-cover-image w-100 h-100"
          src={props.media_url}
          alt={props.media_alt_text}
        />
      </div>
      <Row className="text-container justify-content-center mx-0 h-100">
        <Col
          xs={12}
          md={10}
          lg={8}
          xl={6}
          className="order-lg-2 d-flex h-100 align-items-center justify-content-center text-center px-3 px-sm-4 px-lg-0"
        >
          <div className="text-content w-100 mx-auto mw-sm">
            <div className="lead mb-3" style={styles.top_header}>
              {props.top_header}
            </div>
            <h1
              className="display-1 font-weight-bold text-center mb-0"
              style={styles.main_header}
            >
              {props.main_header}
            </h1>
            <h4 className="mt-4 mb-4 text-center" style={styles.subheader}>
              {props.subheader}
            </h4>
            <p
              className="body mx-auto mb-0 font-weight-bold w-100 mw-sm"
              style={styles.description}
            >
              {props.description}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Separator;
