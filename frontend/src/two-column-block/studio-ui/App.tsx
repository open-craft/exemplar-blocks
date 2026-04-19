import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { type ColumnOrder, type Data, type Ratio } from '../apiTypes.ts';
import { type LayoutData, LayoutType, defaultLayout } from '../types.ts';
import { ActionRow, Button, Col, Container, Form, Row } from '@openedx/paragon';
import { CompareArrows } from '@openedx/paragon/icons';
import { TextLayoutEditor } from './components/TextLayoutEditor.tsx';
import { ImageGridLayoutEditor } from './components/ImageGridLayoutEditor.tsx';
import { LessonIntroLayoutEditor } from './components/LessonIntroLayoutEditor.tsx';
import { LessonListLayoutEditor } from './components/LessonListLayoutEditor.tsx';

type AppProps = {
  initialData: Data;
  onSave: (data: Data) => void;
  onCancel: () => void;
};

export const App = ({ initialData, onSave, onCancel }: AppProps) => {
  const [data, setData] = useState(initialData);

  const reverseColumns = () =>
    setData({
      ...data,
      columns: {
        ...data.columns,
        left: data.columns.right,
        right: data.columns.left,
      },
    });

  return (
    <div className="two-column-block-editor editor-with-buttons">
      <div className="wrapper-comp-settings is-active editor-with-buttons">
        <Container className="inner-scroll">
          <Row className="justify-content-end">
            <Button
              variant="tertiary"
              iconBefore={CompareArrows}
              onClick={reverseColumns}
            >
              Reverse columns
            </Button>
          </Row>
          <Row xs={1} sm={2}>
            <Col>
              <Col className="column-editor py-3">
                <h2>Left Column</h2>
                <LayoutSwitcher
                  layoutType={data.columns.left.kind}
                  onUpdate={(kind: LayoutData['kind']) =>
                    setData({
                      ...data,
                      columns: { ...data.columns, left: defaultLayout(kind) },
                    })
                  }
                />
                <LayoutEditor
                  data={data.columns.left}
                  onUpdate={(layoutData: LayoutData) =>
                    setData({
                      ...data,
                      columns: { ...data.columns, left: layoutData },
                    })
                  }
                />
              </Col>
            </Col>
            <Col>
              <Col className="column-editor py-3">
                <h2>Right Column</h2>
                <LayoutSwitcher
                  layoutType={data.columns.right.kind}
                  onUpdate={(kind: LayoutData['kind']) =>
                    setData({
                      ...data,
                      columns: { ...data.columns, right: defaultLayout(kind) },
                    })
                  }
                />
                <LayoutEditor
                  data={data.columns.right}
                  onUpdate={(layoutData: LayoutData) =>
                    setData({
                      ...data,
                      columns: { ...data.columns, right: layoutData },
                    })
                  }
                />
              </Col>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label>Column ratio</Form.Label>
            <Form.Control
              controlClassName="w-auto"
              value={data.columns.ratio}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({
                  ...data,
                  columns: { ...data.columns, ratio: e.target.value as Ratio },
                })
              }
              as="select"
            >
              <option value="3:9">3:9</option>
              <option value="4:8">4:8</option>
              <option value="5:7">5:7</option>
              <option value="6:6">6:6</option>
              <option value="7:5">7:5</option>
              <option value="8:4">8:4</option>
              <option value="9:3">9:3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              <p>Column order on small screens</p>
              <small>Which column should appear first?</small>
            </Form.Label>
            <Form.RadioSet
              isInline
              value={data.columns.order}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({
                  ...data,
                  columns: {
                    ...data.columns,
                    order: e.target.value as ColumnOrder,
                  },
                })
              }
            >
              <Form.Radio value="leftAboveRight">Left column</Form.Radio>
              <Form.Radio value="rightAboveLeft">Right column</Form.Radio>
            </Form.RadioSet>
          </Form.Group>

          <Form.Group>
            <Form.Label>Display Name (shown in Studio only)</Form.Label>
            <Form.Control
              controlClassName="w-auto"
              value={data.displayName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, displayName: e.target.value })
              }
              placeholder="Two-column Block"
            />
          </Form.Group>
        </Container>
      </div>

      <div className="xblock-actions">
        <ActionRow>
          <Button
            variant="primary"
            onClick={() =>
              onSave({ displayName: data.displayName, columns: data.columns })
            }
            size="lg"
          >
            Save
          </Button>
          <Button variant="tertiary" size="lg" onClick={() => onCancel()}>
            Cancel
          </Button>
        </ActionRow>
      </div>
    </div>
  );
};

type LayoutEditorProps = {
  data: LayoutData;
  onUpdate: (layoutData: LayoutData) => void;
};

const LayoutEditor = ({ data, onUpdate }: LayoutEditorProps) => {
  switch (data.kind) {
    case 'text':
      return <TextLayoutEditor data={data} onUpdate={onUpdate} />;
    case 'lessonList':
      return <LessonListLayoutEditor data={data} onUpdate={onUpdate} />;
    case 'lessonIntro':
      return <LessonIntroLayoutEditor data={data} onUpdate={onUpdate} />;
    case 'imageGrid':
      return <ImageGridLayoutEditor data={data} onUpdate={onUpdate} />;
  }
};

type LayoutSwitcherProps = {
  layoutType: LayoutData['kind'];
  onUpdate: (layoutType: LayoutData['kind']) => void;
};

const LayoutSwitcher = ({ layoutType, onUpdate }: LayoutSwitcherProps) => {
  return (
    <Form.Group>
      <Form.Label>Template</Form.Label>
      <Form.Control
        value={layoutType}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onUpdate(e.target.value as LayoutData['kind'])
        }
        as="select"
      >
        <option value={LayoutType.Text}>Text</option>
        <option value={LayoutType.LessonList}>Bulleted Lesson List</option>
        <option value={LayoutType.LessonIntro}>Lesson Intro</option>
        <option value={LayoutType.ImageGrid}>Image and Text Grid</option>
      </Form.Control>
    </Form.Group>
  );
};
