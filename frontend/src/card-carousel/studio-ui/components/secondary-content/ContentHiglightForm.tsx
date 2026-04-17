import Form from '@openedx/paragon/dist/Form';
import { useFormikContext } from 'formik';
import type { InitData, ContentHighlightData } from '../../../types';

export default function ContentHighlightForm({
  cardIndex,
}: {
  cardIndex: number;
}) {
  const { values, handleChange } = useFormikContext<InitData>();
  const prefix = `cards[${cardIndex}].secondaryContent`;
  const content = values.cards[cardIndex]
    .secondaryContent as ContentHighlightData;

  return (
    <>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name={`${prefix}.title`}
          value={content.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Subtitle</Form.Label>
        <Form.Control
          name={`${prefix}.subtitle`}
          value={content.subtitle}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name={`${prefix}.description`}
          value={content.description}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
}
