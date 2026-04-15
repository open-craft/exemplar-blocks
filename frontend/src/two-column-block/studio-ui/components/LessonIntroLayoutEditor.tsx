import { Col, Form, Row } from '@openedx/paragon';
import type { ExtendedLessonInfo, LessonIntroLayoutData } from '../../apiTypes';
import type { ChangeEvent } from 'react';

type LessonIntroLayoutEditorProps = {
  data: LessonIntroLayoutData;
  onUpdate: (layoutData: LessonIntroLayoutData) => void;
};

export const LessonIntroLayoutEditor = ({
  data,
  onUpdate,
}: LessonIntroLayoutEditorProps) => {
  return (
    <>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={data.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({ ...data, title: e.target.value })
          }
          placeholder="Overview"
        />
      </Form.Group>

      <p className="lead">Lesson Info</p>
      <Row>
        <Col xs={3}>
          <Form.Group>
            <Form.Label className="sm">Lesson No.</Form.Label>
            <Form.Control
              value={data.lesson.id}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onUpdate({
                  ...data,
                  lesson: { ...data.lesson, id: e.target.value },
                })
              }
              placeholder=""
            />
          </Form.Group>
        </Col>
        <Col xs={9}>
          <Form.Group>
            <Form.Label className="sm">Lesson Title</Form.Label>
            <Form.Control
              value={data.lesson.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onUpdate({
                  ...data,
                  lesson: { ...data.lesson, title: e.target.value },
                })
              }
              placeholder="Add lesson title"
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Label>Lesson Summary</Form.Label>
        <Form.Control
          style={{ minHeight: '160px' }}
          value={data.summary}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({ ...data, summary: e.target.value })
          }
          placeholder=""
          as="textarea"
        />
      </Form.Group>

      <Row>
        <Col>
          <Form.Checkbox
            checked={data.showStartLessonButton}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onUpdate({ ...data, showStartLessonButton: e.target.checked })
            }
          >
            Show start lesson button
          </Form.Checkbox>
        </Col>
      </Row>

      {data.showStartLessonButton && (
        <Row>
          <Col>
            <Form.Group>
              <Form.Label className="sm">Next Lesson URL</Form.Label>
              <Form.Control
                value={data.lesson.url}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onUpdate({
                    ...data,
                    lesson: {
                      ...data.lesson,
                      url: e.target.value,
                    },
                  })
                }
                placeholder="URL"
              />
            </Form.Group>
          </Col>
        </Row>
      )}

      <Row>
        <Col>
          <Form.Checkbox
            checked={data.previousLesson !== null}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onUpdate({
                ...data,
                previousLesson: e.target.checked
                  ? { id: '', title: '', url: '' }
                  : null,
              })
            }
          >
            Show previous lesson button
          </Form.Checkbox>
        </Col>
      </Row>

      {data.previousLesson !== null && (
        <>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label className="sm">Lesson No.</Form.Label>
                <Form.Control
                  controlClassName="w-auto"
                  value={data.previousLesson.id}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onUpdate({
                      ...data,
                      previousLesson: {
                        ...(data.previousLesson as ExtendedLessonInfo),
                        id: e.target.value,
                      },
                    })
                  }
                  placeholder=""
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label className="sm">Previous Lesson URL</Form.Label>
                <Form.Control
                  value={data.previousLesson.url}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onUpdate({
                      ...data,
                      previousLesson: {
                        ...(data.previousLesson as ExtendedLessonInfo),
                        url: e.target.value,
                      },
                    })
                  }
                  placeholder="URL"
                />
              </Form.Group>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
