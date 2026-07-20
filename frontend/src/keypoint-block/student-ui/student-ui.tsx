import { Button, Container } from '@openedx/paragon';
import { type KeyPoint } from '../type';

interface StudentUiProps {
  header: string;
  keypoints: KeyPoint[];
  summary: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor: string;
}

function StudentUi({
  header,
  keypoints,
  summary,
  buttonText,
  buttonLink,
  backgroundColor,
}: StudentUiProps) {
  return (
    <div className="xblock-keypoints" style={{ backgroundColor }}>
      <Container size="xl" className="p-4">
        {header && <h2 className="font-weight-bold mb-4">{header}</h2>}

        <div className="keypoints-card-grid">
          {keypoints.map((kp, idx) => (
            <div key={`kp-${idx}`} className="keypoint">
              <h4 className="keypoint-label font-weight-bold mb-1">
                {kp.keypoint}
              </h4>
              <p className="text-gray-700 mb-0">{kp.description}</p>
            </div>
          ))}
        </div>

        {summary && <p className="keypoints-summary mb-0">{summary}</p>}

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
    </div>
  );
}

export default StudentUi;
