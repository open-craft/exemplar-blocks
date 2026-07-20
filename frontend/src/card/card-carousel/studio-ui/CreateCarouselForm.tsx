import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Stack from '@openedx/paragon/dist/Stack';
import ColorPicker from '@openedx/paragon/dist/ColorPicker';
import { useFormikContext } from 'formik';
import type { InitData } from '@/card/card-carousel/types';

export default function CreateCarouselForm() {
  const { values, setFieldValue, handleChange } = useFormikContext<InitData>();

  return (
    <div className="p-4">
      <h3>Create Card Carousel</h3>
      <Form.Group>
        <Form.Label>Display Name</Form.Label>
        <Form.Text muted>Name of the XBlock component in Studio.</Form.Text>
        <Form.Control
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Card Layout</Form.Label>
        <Form.Text>
          Choose whether cards in this carousel use a vertical or horizontal
          layout. You'll add and edit the cards in the next step.
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
      <Form.Group className="my-3">
        <Form.Checkbox
          name="disableNumbering"
          checked={!values.disableNumbering}
          onChange={(e: React.InputEvent<HTMLInputElement>) =>
            setFieldValue('disableNumbering', !e.currentTarget.checked)
          }
        >
          Add card numbers
        </Form.Checkbox>
        <Form.Text className="small">
          Displays progress. For e.g., (2/4)
        </Form.Text>
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
