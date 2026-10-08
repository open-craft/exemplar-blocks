import { Col, Row, Icon } from '@openedx/paragon';
import { type Data } from '../apiTypes';
import { CheckCircle } from '@openedx/paragon/icons';

type AppProps = {
  data: Data;
};

export const App = ({ data }: AppProps) => {
  return (
    <div
      className="ideas-overview-xblock"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className="ideas-overview-container">
        {data.content.header && (
          <Row className="ideas-overview-header-row">
            <Col xs={12}>
              <div
                className="ideas-overview-rich-text"
                dangerouslySetInnerHTML={{ __html: data.content.header }}
              />
            </Col>
          </Row>
        )}
        {data.content.ideas.map((idea, index) => (
          <Row
            className="ideas-overview-idea-row"
            key={`${idea.title}-${index}`}
          >
            <Col xs={12} sm={6} className="ideas-overview-title-column">
              <div className="ideas-overview-title-wrapper">
                <Icon
                  src={CheckCircle}
                  size="lg"
                  className="ideas-overview-icon"
                />
                <span className="ideas-overview-title">{idea.title}</span>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <ul className="ideas-overview-points">
                {idea.points.map((point, pointIndex) => (
                  <li
                    className="ideas-overview-point"
                    key={`${idea.title}-point-${pointIndex}`}
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                ))}
              </ul>
            </Col>
          </Row>
        ))}
        {data.content.footer && (
          <Row className="ideas-overview-footer-row">
            <Col xs={12}>
              <div
                className="ideas-overview-rich-text"
                dangerouslySetInnerHTML={{ __html: data.content.footer }}
              />
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};
