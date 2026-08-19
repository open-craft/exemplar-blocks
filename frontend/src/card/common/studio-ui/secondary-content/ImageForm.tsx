import { useState } from 'react';
import Form from '@openedx/paragon/dist/Form';
import { useFormikContext } from 'formik';
import { URLFilePickerWrapper } from '@/shared/components/URLFilePickerWrapper.tsx';
import type { XBlockConfig } from '../../../../types.ts';
import type {
  FormDataPartial,
  ImageData,
  Orientation,
} from '@/card/common/types';

export default function ImageForm({ cardIndex }: { cardIndex: number }) {
  const { values, handleChange, setFieldValue } =
    useFormikContext<FormDataPartial>();
  const [isDecorative, setIsDecorative] = useState(false);
  const card = values.cards[cardIndex];
  const prefix = `cards[${cardIndex}].secondaryContent`;
  const image = card.secondaryContent as ImageData;
  const orientation = (card as typeof card & { orientation?: Orientation })
    .orientation;
  const recommendation =
    orientation === 'HORIZONTAL'
      ? 'Recommended image size: 700 × 1200 px. Use a portrait image to avoid cropping in the side panel.'
      : orientation === 'VERTICAL'
        ? 'Recommended image size: 1200 × 300 px. Use a wide banner image to avoid cropping.'
        : null;

  function handleDecorativeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsDecorative(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setFieldValue(`${prefix}.altText`, '');
    }
  }

  return (
    <>
      <Form.Group>
        <Form.Label>Image Source URL</Form.Label>
        <URLFilePickerWrapper<XBlockConfig>
          setValue={(value) => setFieldValue(`${prefix}.location`, value)}
          fileTypes={['image']}
        >
          <Form.Control
            name={`${prefix}.location`}
            value={image.location}
            onChange={handleChange}
            placeholder="URL"
          />
        </URLFilePickerWrapper>
        {recommendation && (
          <Form.Text className="small">{recommendation}</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Alt Text</Form.Label>
        <div className="mb-0">
          <Form.Checkbox
            checked={isDecorative}
            onChange={handleDecorativeChange}
            size="sm"
          >
            Decorative Image
          </Form.Checkbox>
        </div>
        <Form.Control
          name={`${prefix}.altText`}
          value={image.altText}
          onChange={handleChange}
          placeholder="Alt Text"
          disabled={isDecorative}
        />
      </Form.Group>
    </>
  );
}
