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
      <Form.Group className="two-column-editor-field">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={data.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({ ...data, title: e.target.value })
          }
          placeholder="Overview"
        />
      </Form.Group>

      <Form.Group className="two-column-editor-field">
        <Form.Label>Intro text</Form.Label>
        <Form.Control
          className="two-column-editor-tall-textarea"
          value={data.text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({ ...data, text: e.target.value })
          }
          placeholder=""
          as="textarea"
        />
      </Form.Group>
      <p className="two-column-editor-subsection-title">Lesson List</p>
      <p className="two-column-editor-subsection-description">
        Add lessons to display in the bulleted list.
      </p>
      {(data.lessons.length > 0 ? data.lessons : [{ id: '', title: '' }]).map(
        (lesson, index) => (
          <LessonEntry
            key={index}
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
    <Row className="two-column-editor-entry">
      <Col xs={2}>
        <Form.Group className="two-column-editor-field">
          <Form.Label className="two-column-editor-label-sm">
            Lesson No.
          </Form.Label>
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
        <Form.Group className="two-column-editor-field">
          <Form.Label className="two-column-editor-label-sm">
            Lesson Title
          </Form.Label>
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
        <Form.Group className="two-column-editor-field">
          <Button variant="danger" onClick={() => onDelete()}>
            <Icon src={CrossMark} screenReaderText="delete" />
          </Button>
        </Form.Group>
      </Col>
    </Row>
  );
};
