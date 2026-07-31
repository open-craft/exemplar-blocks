import * as React from 'react';
import {
  ActionRow,
  Button,
  ColorPicker,
  Container,
  Form,
  Stack,
  Sticky,
} from '@openedx/paragon';
import { Add, DeleteOutline } from '@openedx/paragon/icons';
import { type KeyPoint } from '../type';
import { useContext } from 'react';
import {
  RuntimeContext,
  useHandlerUrl,
  saveStudioBlock,
} from '@opencraft/xblock-react-utils';

interface StudioUiProps {
  initialHeader: string;
  initialKeypoints: KeyPoint[];
  initialSummary: string;
  initialButtonText: string;
  initialButtonLink: string;
  initialBackgroundColor: string;
}

interface SaveData {
  header: string;
  keypoints: KeyPoint[];
  summary: string;
  button_text: string;
  button_link: string;
  background_color: string;
}

export default function StudioUi({
  initialHeader,
  initialKeypoints,
  initialSummary,
  initialButtonText,
  initialButtonLink,
  initialBackgroundColor,
}: StudioUiProps) {
  const { runtime } = useContext(RuntimeContext);
  const studioSaveUrl = useHandlerUrl('studio_save');
  const [header, setHeader] = React.useState(initialHeader);
  const [keypoints, setKeypoints] =
    React.useState<KeyPoint[]>(initialKeypoints);
  const [summary, setSummary] = React.useState(initialSummary);
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonLink, setButtonLink] = React.useState(initialButtonLink);
  const [backgroundColor, setBackgroundColor] = React.useState(
    initialBackgroundColor,
  );

  const addKeypoint = () => {
    setKeypoints([...keypoints, { keypoint: '', description: '' }]);
  };

  const updateKeypoint = (idx: number, change: Partial<KeyPoint>) => {
    const updated = [...keypoints];
    updated[idx] = { ...updated[idx], ...change };
    setKeypoints(updated);
  };

  const removeKeypoint = (idx: number) => {
    setKeypoints(keypoints.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    const data: SaveData = {
      header,
      keypoints,
      summary,
      button_text: buttonText,
      button_link: buttonLink,
      background_color: backgroundColor,
    };

    saveStudioBlock<SaveData>({
      saveUrl: studioSaveUrl,
      data,
      runtime,
      errorMessage: 'Failed to save keypoint configuration',
    });
  };

  return (
    <div className="react-studio-block">
      <Container className="xblock-keypoints editor-with-buttons">
        <div className="wrapper-comp-settings is-active">
          <Stack direction="vertical" gap={3} className="p-2">
            {/* Block Header */}
            <Form.Group>
              <Form.Label>Block Header</Form.Label>
              <Form.Control
                value={header}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setHeader(e.target.value)
                }
                placeholder="e.g. Key Concepts to Explore"
              />
            </Form.Group>

            {/* Key Terms Section */}
            <div>
              <ActionRow className="mb-2">
                <h4 className="m-0">Key Terms</h4>
                <ActionRow.Spacer />
                <Button iconBefore={Add} onClick={addKeypoint}>
                  Add Key Term
                </Button>
              </ActionRow>

              {keypoints.length === 0 && (
                <p className="text-muted">
                  No key terms added yet. Click &quot;Add Key Term&quot; to get
                  started.
                </p>
              )}

              {keypoints.map((kp, idx) => (
                <div className="keypoint-entry" key={`keypoint-${idx}`}>
                  <ActionRow className="mb-2">
                    <span className="font-weight-bold">Term {idx + 1}</span>
                    <ActionRow.Spacer />
                    <Button
                      variant="outline-danger"
                      iconBefore={DeleteOutline}
                      onClick={() => removeKeypoint(idx)}
                    >
                      Remove
                    </Button>
                  </ActionRow>
                  <Form.Group className="mb-2">
                    <Form.Label>Label</Form.Label>
                    <Form.Control
                      value={kp.keypoint}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateKeypoint(idx, { keypoint: e.target.value })
                      }
                      placeholder="e.g. Fluid balance"
                    />
                  </Form.Group>
                  <Form.Group className="mb-0">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={kp.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        updateKeypoint(idx, { description: e.target.value })
                      }
                      placeholder="e.g. The regulation of fluids within the body..."
                    />
                  </Form.Group>
                </div>
              ))}
            </div>

            {/* Summary */}
            <Form.Group>
              <Form.Label>Summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={summary}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setSummary(e.target.value)
                }
                placeholder="e.g. These concepts form a connected sequence..."
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Background Color</Form.Label>
              <ColorPicker
                color={backgroundColor}
                setColor={setBackgroundColor}
              />
            </Form.Group>

            {/* Action Button Section */}
            <div>
              <h4 className="mb-2">Action Button</h4>
              <Form.Group className="mb-2">
                <Form.Label>Button Text</Form.Label>
                <Form.Control
                  value={buttonText}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setButtonText(e.target.value)
                  }
                  placeholder="e.g. Glossary"
                />
              </Form.Group>
              <Form.Group className="mb-0">
                <Form.Label>Button Link</Form.Label>
                <Form.Control
                  value={buttonLink}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setButtonLink(e.target.value)
                  }
                  placeholder="e.g. https://example.com/glossary"
                />
              </Form.Group>
            </div>
          </Stack>
        </div>
      </Container>

      {/* Save / Cancel action bar — outside editor-with-buttons to avoid platform's position:absolute */}
      <Sticky position="bottom" className="xblock-actions p-2 border-top">
        <ActionRow>
          <ActionRow.Spacer />
          <Button
            variant="tertiary"
            onClick={() => runtime.notify('cancel', {})}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </ActionRow>
      </Sticky>
    </div>
  );
}
