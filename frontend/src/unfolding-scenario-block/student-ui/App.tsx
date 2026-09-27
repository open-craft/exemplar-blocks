import { type Data } from '../apiTypes';
import { Image, Button, Col, Icon, Row } from '@openedx/paragon';
import { ArrowOutward } from '@openedx/paragon/icons';

type AppProps = {
  data: Data;
};

export const App = ({ data }: AppProps) => {
  const { scenarioData } = data;
  return (
    <div className="rounded-lg overflow-hidden xblock-unfolding-scenario-wrapper">
      {/* The introduction container */}
      <Row className="p-0">
        <Col xs="12" md="8" className="p-5 d-flex flex-column">
          <div className="scenario-name border border-primary d-flex align-items-center p-3 mb-5">
            <div className="border-right">
              <Icon src={ArrowOutward} className="mr-2" />
            </div>
            <span className="ml-3">{scenarioData.name}</span>
          </div>
          <h4 className="text-secondary-700">
            {scenarioData.introduction.heading}
          </h4>
          <p className="flex-grow-1">{scenarioData.introduction.description}</p>

          <div className="d-flex justify-content-end">
            <Button variant="unfolding-scenario-blue" className="rounded-pill">
              Launch Interactive
            </Button>
          </div>
        </Col>
        <Col xs="12" md="4" className="p-0">
          <Image
            src={scenarioData.introduction.imageURL}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Col>
      </Row>
    </div>
  );
};
