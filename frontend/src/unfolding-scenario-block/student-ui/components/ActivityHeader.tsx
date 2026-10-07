import { Row, Col, IconButton } from '@openedx/paragon';
import { Replay, Close } from '@openedx/paragon/icons';

// Header for the activity, should be responsive and change layout at different viewport widths
interface ActivityHeaderProps {
  onClose: () => void;
  title: string;
  onReset: () => void;
  activeScenarioIndex: number;
  totalScenarios: number;
}

// TODO: make this responsive and implement mobile and tablet headers
export const ActivityHeader = ({
  onClose,
  title,
  onReset,
  activeScenarioIndex,
  totalScenarios,
}: ActivityHeaderProps) => (
  <div className="sticky-top bg-offwhite">
    <Row className="justify-content-between px-3 w-100">
      <Col className="d-flex align-items-center mx-3 small-heading text-main">
        {title}
      </Col>
      <Col className="d-flex justify-content-center">
        <div className="d-inline-flex align-items-center py-3 pl-2 pr-3 rounded-lg-bottom bg-main-navy">
          <IconButton
            className="text-white bg-main-navy mr-3"
            src={Replay}
            onClick={onReset}
            alt="Reset activity"
          />
          {Array.from(Array(totalScenarios)).map((_, i) => (
            <>
              <div
                className={`step-indicator d-flex justify-content-center align-items-center rounded-pill p-1 text-white ${i <= activeScenarioIndex ? 'bg-medium text-darkest' : 'bg-darkest text-white'}`}
              >
                {i + 1}
              </div>
              {i < totalScenarios - 1 && (
                <div className="step-indicator-separator" />
              )}
            </>
          ))}
          {activeScenarioIndex >= totalScenarios && (
            <span className="ml-4 text-white font-size-md font-weight-bold">
              Completed!
            </span>
          )}
        </div>
      </Col>
      <Col className="d-flex justify-content-end align-items-center mx-3">
        <IconButton
          className="text-main-navy"
          src={Close}
          onClick={onClose}
          alt="Close activity"
        />
      </Col>
    </Row>
  </div>
);
