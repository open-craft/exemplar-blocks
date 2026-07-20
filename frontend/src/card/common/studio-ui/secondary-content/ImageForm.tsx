import { useState } from 'react';
import Form from '@openedx/paragon/dist/Form';
import { useFormikContext } from 'formik';
import { URLFilePickerWrapper } from '@/shared/components/URLFilePickerWrapper.tsx';
import type { XBlockConfig } from '../../../../types.ts';
import type { FormDataPartial, ImageData } from '@/card/common/types';

export default function ImageForm({ cardIndex }: { cardIndex: number }) {
  const { values, handleChange, setFieldValue } =
    useFormikContext<FormDataPartial>();
  const [isDecorative, setIsDecorative] = useState(false);
  const prefix = `cards[${cardIndex}].secondaryContent`;
  const image = values.cards[cardIndex].secondaryContent as ImageData;

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
