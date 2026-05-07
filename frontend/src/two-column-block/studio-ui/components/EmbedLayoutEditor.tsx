import { Form } from '@openedx/paragon';
import type { ChangeEvent } from 'react';
import type { EmbedLayoutData } from '../../apiTypes';

type EmbedLayoutEditorProps = {
  data: EmbedLayoutData;
  onUpdate: (layoutData: EmbedLayoutData) => void;
};

export const EmbedLayoutEditor = ({
  data,
  onUpdate,
}: EmbedLayoutEditorProps) => {
  return (
    <>
      <Form.Group>
        <Form.Label>Embed code (raw HTML)</Form.Label>
        <Form.Control
          value={data.html}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              html: e.target.value,
            })
          }
          placeholder=""
          as="textarea"
          autoResize={true}
        />
      </Form.Group>
    </>
  );
};
