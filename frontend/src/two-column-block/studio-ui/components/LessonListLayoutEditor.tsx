import { Button, Col, Form, Icon, Row } from '@openedx/paragon';
import type { LessonInfo, LessonListLayoutData } from '../../apiTypes';
import type { ChangeEvent } from 'react';
import { CrossMark } from '../../icons';

type LessonListLayoutEditorProps = {
  data: LessonListLayoutData;
  onUpdate: (layoutData: LessonListLayoutData) => void;
};

export const LessonListLayoutEditor = ({
  data,
  onUpdate,
}: LessonListLayoutEditorProps) => {
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

      <Form.Group>
        <Form.Label>Intro text</Form.Label>
        <Form.Control
          style={{ minHeight: '160px' }}
          value={data.text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({ ...data, text: e.target.value })
          }
          placeholder=""
          as="textarea"
        />
      </Form.Group>
      <p className="lead">Lesson List</p>
      <p>Add lessons to display in the bulleted list.</p>
      {(data.lessons.length > 0 ? data.lessons : [{ id: '', title: '' }]).map(
        (lesson, index) => (
          <LessonEntry
            lesson={lesson}
            onUpdate={(lesson) =>
              onUpdate({
                ...data,
                lessons: [
                  ...data.lessons.slice(0, index),
                  lesson,
                  ...data.lessons.slice(index + 1),
                ],
              })
            }
            onDelete={() =>
              onUpdate({
                ...data,
                lessons: [
                  ...data.lessons.slice(0, index),
                  ...data.lessons.slice(index + 1),
                ],
              })
            }
          />
        ),
      )}
      <Row>
        <Col>
          <Button
            variant="success"
            onClick={() =>
              onUpdate({
                ...data,
                lessons: [
                  ...data.lessons,
                  {
                    id: '',
                    title: '',
                  },
                ],
              })
            }
          >
            Add Lesson
          </Button>
        </Col>
      </Row>
    </>
  );
};

type LessonEntryProps = {
  lesson: LessonInfo;
  onUpdate: (lesson: LessonInfo) => void;
  onDelete: () => void;
};

const LessonEntry = ({ lesson, onUpdate, onDelete }: LessonEntryProps) => {
  return (
    <Row className="align-items-end">
      <Col xs={2}>
        <Form.Group>
          <Form.Label className="sm">Lesson No.</Form.Label>
          <Form.Control
            value={lesson.id}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onUpdate({ ...lesson, id: e.target.value })
            }
            placeholder=""
          />
        </Form.Group>
      </Col>
      <Col xs={8}>
        <Form.Group>
          <Form.Label className="sm">Lesson Title</Form.Label>
          <Form.Control
            value={lesson.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onUpdate({ ...lesson, title: e.target.value })
            }
            placeholder="Add lesson title"
          />
        </Form.Group>
      </Col>
      <Col xs={1}>
        <Form.Group>
          <Button variant="danger" onClick={() => onDelete()}>
            <Icon src={CrossMark} screenReaderText="delete" />
          </Button>
        </Form.Group>
      </Col>
    </Row>
  );
};
