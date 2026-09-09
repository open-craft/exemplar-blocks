import { Form } from '@openedx/paragon';
import type { ChangeEvent } from 'react';
import type { RawHTMLLayoutData } from '../../apiTypes';

type RawHTMLLayoutEditorProps = {
  data: RawHTMLLayoutData;
  onUpdate: (layoutData: RawHTMLLayoutData) => void;
};

export const RawHTMLLayoutEditor = ({
  data,
  onUpdate,
}: RawHTMLLayoutEditorProps) => {
  return (
    <>
      <Form.Group className="two-column-editor-field">
        <Form.Label>
          Raw HTML (e.g. an embed code or interactive activity)
        </Form.Label>
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
          className="two-column-editor-raw-html"
        />
      </Form.Group>
    </>
  );
};
