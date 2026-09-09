import { useState, type ReactElement } from 'react';
import type { ChangeEvent } from 'react';
import { type ColumnOrder, type Data, type Ratio } from '../apiTypes.ts';
import { type LayoutData, LayoutType, defaultLayout } from '../types.ts';
import {
  ActionRow,
  Button,
  Col,
  ColorPicker,
  Form,
  Row,
  Sticky,
} from '@openedx/paragon';
import { CompareArrows } from '@openedx/paragon/icons';
import { TextLayoutEditor } from './components/TextLayoutEditor.tsx';
import { ImageGridLayoutEditor } from './components/ImageGridLayoutEditor.tsx';
import { LessonIntroLayoutEditor } from './components/LessonIntroLayoutEditor.tsx';
import { LessonListLayoutEditor } from './components/LessonListLayoutEditor.tsx';
import { RawHTMLLayoutEditor } from './components/RawHTMLLayoutEditor.tsx';

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
      <div className="wrapper-comp-settings is-active two-column-editor-body">
        <Form.Group className="two-column-editor-field">
          <Form.Label>Display Name (shown in Studio only)</Form.Label>
          <Form.Control
            controlClassName="two-column-editor-control-auto"
            value={data.displayName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, displayName: e.target.value })
            }
            placeholder="Two-column Block"
          />
        </Form.Group>

        <Row xs={1} sm={2} className="two-column-editor-columns">
          <Col className="two-column-editor-column">
            <h4 className="two-column-editor-column-title">Left Column</h4>
            <div className="two-column-editor-panel">
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
            </div>
          </Col>

          <Col className="two-column-editor-column">
            <ActionRow className="two-column-editor-column-header">
              <h4 className="two-column-editor-column-title">Right Column</h4>
              <ActionRow.Spacer />
              <Button
                variant="tertiary"
                iconBefore={CompareArrows}
                onClick={reverseColumns}
              >
                Reverse columns
              </Button>
            </ActionRow>
            <div className="two-column-editor-panel">
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
            </div>
          </Col>
        </Row>

        <h4 className="two-column-editor-section-title">Additional Settings</h4>
        <Form.Group className="two-column-editor-field">
          <Form.Label>Column ratio</Form.Label>
          <Form.Control
            controlClassName="two-column-editor-control-auto"
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

        <Form.Group className="two-column-editor-field">
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

        <Form.Label className="two-column-editor-color-field">
          Background Color
          <ColorPicker
            color={data.backgroundColor}
            setColor={(color: string) =>
              setData({ ...data, backgroundColor: color })
            }
          />
        </Form.Label>
      </div>

      <Sticky
        position="bottom"
        className="xblock-actions two-column-editor-actions"
      >
        <ActionRow>
          <Button variant="primary" onClick={() => onSave(data)}>
            Save
          </Button>
          <Button variant="tertiary" onClick={() => onCancel()}>
            Cancel
          </Button>
        </ActionRow>
      </Sticky>
    </div>
  );
};

type LayoutEditorProps = {
  data: LayoutData;
  onUpdate: (layoutData: LayoutData) => void;
};

const LayoutEditor = ({ data, onUpdate }: LayoutEditorProps): ReactElement => {
  switch (data.kind) {
    case 'text':
      return <TextLayoutEditor data={data} onUpdate={onUpdate} />;
    case 'lessonList':
      return <LessonListLayoutEditor data={data} onUpdate={onUpdate} />;
    case 'lessonIntro':
      return <LessonIntroLayoutEditor data={data} onUpdate={onUpdate} />;
    case 'imageGrid':
      return <ImageGridLayoutEditor data={data} onUpdate={onUpdate} />;
    case 'rawHTML':
      return <RawHTMLLayoutEditor data={data} onUpdate={onUpdate} />;
  }
};

type LayoutSwitcherProps = {
  layoutType: LayoutData['kind'];
  onUpdate: (layoutType: LayoutData['kind']) => void;
};

const LayoutSwitcher = ({ layoutType, onUpdate }: LayoutSwitcherProps) => {
  return (
    <Form.Group className="two-column-editor-field">
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
        <option value={LayoutType.RawHTML}>Raw HTML</option>
      </Form.Control>
    </Form.Group>
  );
};
