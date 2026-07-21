import { Form, SelectableBox, Row, Icon } from '@openedx/paragon';
import {
  VerticalAlignTop,
  VerticalAlignCenter,
  VerticalAlignBottom,
} from '@openedx/paragon/icons';
import type { ChangeEvent } from 'react';
import type { Alignment, TextLayoutData } from '../../apiTypes';
import { SimpleRichTextEditor } from '@/shared/components/TinyMCE';

type TextLayoutEditorProps = {
  data: TextLayoutData;
  onUpdate: (layoutData: TextLayoutData) => void;
};

export const TextLayoutEditor = ({ data, onUpdate }: TextLayoutEditorProps) => {
  return (
    <>
      <SimpleRichTextEditor
        value={data.content}
        onEditorChange={(content: string) => onUpdate({ ...data, content })}
      />

      <Form.Group>
        <Form.Label>Vertical alignment:</Form.Label>
        <SelectableBox.Set
          value={data.verticalAlignment}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              verticalAlignment: e.target.value as Alignment,
            })
          }
          columns={3}
        >
          <SelectableBox value="start">
            <Row xs={1} className="justify-content-center text-center">
              <Icon src={VerticalAlignTop} />
              <p>Align top</p>
            </Row>
          </SelectableBox>
          <SelectableBox value="center">
            <Row xs={1} className="justify-content-center text-center">
              <Icon src={VerticalAlignCenter} />
              <p>Align center</p>
            </Row>
          </SelectableBox>
          <SelectableBox value="end">
            <Row xs={1} className="justify-content-center text-center">
              <Icon src={VerticalAlignBottom} />
              <p>Align bottom</p>
            </Row>
          </SelectableBox>
        </SelectableBox.Set>
      </Form.Group>
    </>
  );
};
