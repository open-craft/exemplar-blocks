import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { type Data } from '../apiTypes.ts';
import { ActionRow, Button, Form, Sticky } from '@openedx/paragon';

type AppProps = {
  initialData: Data;
  onSave: (data: Data) => void;
  onCancel: () => void;
};

export const App = ({ initialData, onSave, onCancel }: AppProps) => {
  const [data, setData] = useState(initialData);

  // TODO: complete this editor. To be implemented in https://tasks.opencraft.com/browse/BB-11173
  return (
    <div className="unfolding-scenario-block-editor editor-with-buttons">
      <div className="wrapper-comp-settings is-active">
        <Form.Group>
          <Form.Label>Display Name (shown in Studio only)</Form.Label>
          <Form.Control
            value={data.displayName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, displayName: e.target.value })
            }
            placeholder="Unfolding scenario"
          />
        </Form.Group>

        {/* raw data editor for testing purposes */}
        <Form.Group>
          <Form.Label>Raw Data (JSON)</Form.Label>
          <Form.Control
            as="textarea"
            autoResize
            value={JSON.stringify(data.scenarioData, null, 4)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, scenarioData: JSON.parse(e.target.value) })
            }
          />
        </Form.Group>
      </div>

      <Sticky position="bottom" className="xblock-actions">
        <ActionRow>
          <Button variant="primary" onClick={() => onSave(data)}>
            Save
          </Button>
          <Button variant="tertiary" onClick={() => onCancel()}>
            Cancel
          </Button>
        </ActionRow>
      </Sticky>
    </div>
  );
};
