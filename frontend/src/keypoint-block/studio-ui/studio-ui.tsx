import * as React from 'react';
import { ActionRow, Button, Container, Form, Stack } from '@openedx/paragon';
import { Add, DeleteOutline } from '@openedx/paragon/icons';
import { type XBlockRuntime } from '../../types';
import { type KeyPoint } from '../type';

interface StudioUiProps {
  initialHeader: string;
  initialKeypoints: KeyPoint[];
  initialButtonText: string;
  initialButtonLink: string;
  studioSaveUrl: string;
  runtime: XBlockRuntime;
}

export default function StudioUi({
  initialHeader,
  initialKeypoints,
  initialButtonText,
  initialButtonLink,
  studioSaveUrl,
  runtime,
}: StudioUiProps) {
  const [header, setHeader] = React.useState(initialHeader);
  const [keypoints, setKeypoints] =
    React.useState<KeyPoint[]>(initialKeypoints);
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonLink, setButtonLink] = React.useState(initialButtonLink);

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
    runtime.notify('save', { state: 'start' });
    $.post(
      studioSaveUrl,
      JSON.stringify({
        header,
        keypoints,
        button_text: buttonText,
        button_link: buttonLink,
      }),
    )
      .done(() => {
        runtime.notify('save', { state: 'end' });
      })
      .fail(() => {
        runtime.notify('error', {
          title: 'Save Error',
          message: 'Failed to save keypoint configuration',
        });
      });
  };

  return (
    <>
      <Container className="xblock-keypoints editor-with-buttons">
        <div className="studio-editor-scroll">
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
                <Button iconBefore={Add} onClick={addKeypoint} size="lg">
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
                      size="lg"
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
      <div className="xblock-actions">
        <ActionRow>
          <ActionRow.Spacer />
          <Button
            variant="tertiary"
            size="lg"
            onClick={() => runtime.notify('cancel', {})}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} size="lg">
            Save
          </Button>
        </ActionRow>
      </div>
    </>
  );
}
