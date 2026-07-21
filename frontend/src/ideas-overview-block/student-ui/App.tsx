import { Col, Row, Container, Icon } from '@openedx/paragon';
import { type Data } from '../apiTypes';
import { CheckCircle } from '@openedx/paragon/icons';

type AppProps = {
  data: Data;
};

export const App = ({ data }: AppProps) => {
  return (
    <Container
      className="p-0"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <Container size="lg">
        {data.content.header && (
          <Row className="p-3 border-bottom">
            <Col xs={12}>
              <div dangerouslySetInnerHTML={{ __html: data.content.header }} />
            </Col>
          </Row>
        )}
        {data.content.ideas.map((idea, index) => (
          <Row className={`p-3 ${index > 0 ? 'border-top' : ''}`}>
            <Col xs={12} sm={6}>
              <div className="d-inline-flex align-items-center">
                <Icon
                  src={CheckCircle}
                  size="lg"
                  className="text-info-500 mr-2"
                />
                <span className="font-weight-bold text-primary-500">
                  {idea.title}
                </span>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <ul>
                {idea.points.map((point) => (
                  <li dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </Col>
          </Row>
        ))}
        {data.content.footer && (
          <Row className="p-3 border-top">
            <Col xs={12}>
              <div dangerouslySetInnerHTML={{ __html: data.content.footer }} />
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
};
