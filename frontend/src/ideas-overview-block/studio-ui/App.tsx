import { useState, type ReactElement } from 'react';
import type { ChangeEvent } from 'react';
import { type Data, type Idea } from '../apiTypes.ts';
import {
  ActionRow,
  Button,
  Card,
  Col,
  ColorPicker,
  Container,
  Form,
  IconButton,
  Row,
  Stack,
  Sticky,
} from '@openedx/paragon';
import { Add, DeleteOutline } from '@openedx/paragon/icons';
import { SimpleRichTextEditor } from '@/shared/components/TinyMCE.tsx';

interface AppProps {
  initialData: Data;
  onSave: (data: Data) => void;
  onCancel: () => void;
}

export const App = ({ initialData, onSave, onCancel }: AppProps) => {
  const [data, setData] = useState(initialData);

  const deleteIdea = (index: number) => {
    setData({
      ...data,
      content: {
        ...data.content,
        ideas: [
          ...data.content.ideas.slice(0, index),
          ...data.content.ideas.slice(index + 1),
        ],
      },
    });
  };

  const updateIdea = (idea: Idea, index: number) => {
    setData({
      ...data,
      content: {
        ...data.content,
        ideas: [
          ...data.content.ideas.slice(0, index),
          idea,
          ...data.content.ideas.slice(index + 1),
        ],
      },
    });
  };

  return (
    <div className="ideas-overview-block-editor editor-with-buttons d-flex flex-column justify-content-between">
      <Container className="wrapper-comp-settings is-active">
        <Stack gap={3}>
          <Form.Group>
            <Form.Label>Display Name (shown in Studio only)</Form.Label>
            <Form.Control
              value={data.displayName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, displayName: e.target.value })
              }
              placeholder="Ideas Overview"
            />
          </Form.Group>

          <Form.Label>
            <span>Rich text content to display above the ideas.</span>
            <SimpleRichTextEditor
              ariaLabel="Rich text editor for the content above the ideas."
              value={data.content.header}
              onEditorChange={(value: string) =>
                setData({
                  ...data,
                  content: { ...data.content, header: value },
                })
              }
            />
          </Form.Label>

          <h4>Ideas</h4>
          {data.content.ideas.map((idea, i) => (
            <IdeaEditor
              onDelete={() => deleteIdea(i)}
              onUpdate={(idea) => updateIdea(idea, i)}
              idea={idea}
            />
          ))}

          {data.content.ideas.length == 0 && <div>No ideas added yet.</div>}

          <Row>
            <Col>
              <Button
                variant="success"
                iconBefore={Add}
                onClick={() =>
                  setData({
                    ...data,
                    content: {
                      ...data.content,
                      ideas: [...data.content.ideas, { title: '', points: [] }],
                    },
                  })
                }
              >
                Add idea
              </Button>
            </Col>
          </Row>

          <Form.Label>
            <span>Rich text content to display below the ideas.</span>
            <SimpleRichTextEditor
              ariaLabel="Rich text editor for the content below the ideas."
              value={data.content.footer}
              onEditorChange={(value: string) =>
                setData({
                  ...data,
                  content: { ...data.content, footer: value },
                })
              }
            />
          </Form.Label>

          <Form.Label>
            Background Color
            <ColorPicker
              color={data.backgroundColor}
              setColor={(color: string) =>
                setData({ ...data, backgroundColor: color })
              }
            />
          </Form.Label>
        </Stack>
      </Container>

      <Sticky position="bottom" className="xblock-actions p-2 border-top">
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

interface IdeaEditorProps {
  onDelete: () => void;
  onUpdate: (idea: Idea) => void;
  idea: Idea;
}

const IdeaEditor = ({
  onUpdate,
  onDelete,
  idea,
}: IdeaEditorProps): ReactElement => {
  return (
    <Card>
      <Card.Section
        actions={
          <ActionRow>
            <Button
              variant="outline-danger"
              iconBefore={DeleteOutline}
              onClick={onDelete}
            >
              Remove idea
            </Button>
          </ActionRow>
        }
      >
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={idea.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onUpdate({ ...idea, title: e.target.value })
            }
          />
        </Form.Group>

        <h4>Points</h4>
        <Stack gap={3}>
          {idea.points.map((point, i) => (
            <Row>
              <Col xs={11}>
                <Form.Control
                  value={point}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onUpdate({
                      ...idea,
                      points: [
                        ...idea.points.slice(0, i),
                        e.target.value,
                        ...idea.points.slice(i + 1),
                      ],
                    })
                  }
                />
              </Col>
              <Col xs={1}>
                <IconButton
                  src={DeleteOutline}
                  alt="Delete point"
                  variant="danger"
                  onClick={() =>
                    onUpdate({
                      ...idea,
                      points: [
                        ...idea.points.slice(0, i),
                        ...idea.points.slice(i + 1),
                      ],
                    })
                  }
                />
              </Col>
            </Row>
          ))}

          <Row>
            <Col>
              <Button
                iconBefore={Add}
                variant="success"
                onClick={() =>
                  onUpdate({ ...idea, points: [...idea.points, ''] })
                }
              >
                Add point
              </Button>
            </Col>
          </Row>
        </Stack>
      </Card.Section>
    </Card>
  );
};
