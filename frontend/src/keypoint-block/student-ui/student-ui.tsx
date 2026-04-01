import { Button, Container, Row, Col } from '@openedx/paragon';
import { type KeyPoint } from '../type';

interface StudentUiProps {
  header: string;
  keypoints: KeyPoint[];
  buttonText: string;
  buttonLink: string;
}

function StudentUi({
  header,
  keypoints,
  buttonText,
  buttonLink,
}: StudentUiProps) {
  return (
    <Container className="xblock-keypoints py-4 px-3">
      {header && <h2 className="font-weight-bold mb-4">{header}</h2>}

      <Row>
        {keypoints.map((kp, idx) => (
          <Col xs={12} md={6} className="mb-3" key={`kp-${idx}`}>
            <h4 className="keypoint-label font-weight-bold mb-1">
              {kp.keypoint}
            </h4>
            <p className="text-gray-700 mb-0">{kp.description}</p>
          </Col>
        ))}
      </Row>

      {buttonText && buttonLink && (
        <div className="d-flex justify-content-end mt-4">
          <Button
            as="a"
            href={buttonLink}
            variant="dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </Container>
  );
}

export default StudentUi;
