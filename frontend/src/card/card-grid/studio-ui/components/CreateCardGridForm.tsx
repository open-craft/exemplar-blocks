import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Stack from '@openedx/paragon/dist/Stack';
import ColorPicker from '@openedx/paragon/dist/ColorPicker';

import { useFormikContext } from 'formik';
import type { InitData } from '@/card/card-grid/types';
import { SimpleRichTextEditor } from '@/shared/components/TinyMCE';

export default function CreateCardGridForm() {
  const { values, setFieldValue, handleChange } = useFormikContext<InitData>();

  return (
    <div className="p-4">
      <Form.Group>
        <Form.Label>Display Name</Form.Label>
        <Form.Text muted>
          Name displayed on the block in Studio. Not shown to the learners.
        </Form.Text>
        <Form.Control
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Text muted>
          An optional description that can be shown above the cards.
        </Form.Text>
        <SimpleRichTextEditor
          ariaLabel="Rich text editor for the description content."
          value={values.description}
          onEditorChange={(value: string) =>
            setFieldValue('description', value)
          }
          height="200px"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Card Layout</Form.Label>
        <Form.Text>
          Choose whether cards in this grid use a vertical or horizontal layout.
          You'll add and edit the cards in the next step.
        </Form.Text>
        <Stack direction="horizontal" gap={4}>
          <Button
            className="flex flex-column mt-4 p-4"
            variant={
              values.orientation === 'VERTICAL'
                ? 'outline-success'
                : 'outline-secondary'
            }
            onClick={() => setFieldValue('orientation', 'VERTICAL')}
          >
            <p>
              <span className="material-icons-outlined">splitscreen</span>
            </p>
            <p className="mt-0">
              <strong>Vertical Cards</strong>
            </p>
            <p className="small">Content sits above and below</p>
          </Button>
          <Button
            className="flex flex-column mt-4 p-4"
            variant={
              values.orientation === 'HORIZONTAL'
                ? 'outline-success'
                : 'outline-secondary'
            }
            onClick={() => setFieldValue('orientation', 'HORIZONTAL')}
          >
            <p>
              <span className="material-icons-outlined">vertical_split</span>
            </p>
            <p className="mt-0">
              <strong>Horizontal Cards</strong>
            </p>
            <p className="small">Content sits side-by-side</p>
          </Button>
        </Stack>
      </Form.Group>
      <Form.Group>
        <Form.Label>Footer Description</Form.Label>
        <Form.Text muted>Text that's shown below the cards.</Form.Text>
        <SimpleRichTextEditor
          ariaLabel="Rich text editor for the footer description content."
          value={values.footerDescription}
          onEditorChange={(value: string) =>
            setFieldValue('footerDescription', value)
          }
          height="200px"
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Background Color</Form.Label>
        <ColorPicker
          color={values.backgroundColor}
          setColor={(color: string) => setFieldValue('backgroundColor', color)}
        />
      </Form.Group>
    </div>
  );
}
