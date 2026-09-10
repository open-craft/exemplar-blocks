import { ActionRow, Button } from '@openedx/paragon';
import { useContext } from 'react';
import { RuntimeContext } from '@opencraft/xblock-react-utils';
import CoverForm from './CoverForm.tsx';
import { useFormikContext } from 'formik';

const Editor = () => {
  const { runtime } = useContext(RuntimeContext);
  const form = useFormikContext();
  return (
    <div className="react-studio-block">
      <div className="cover-block-editor editor-with-buttons">
        <div className="wrapper-comp-settings is-active cover-editor-body">
          <CoverForm />
        </div>
        <div className="xblock-actions cover-editor-actions">
          <ActionRow>
            <ActionRow.Spacer />
            <Button
              variant="tertiary"
              onClick={() => runtime.notify('cancel', {})}
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={form.submitForm}>
              Save
            </Button>
          </ActionRow>
        </div>
      </div>
    </div>
  );
};

export default Editor;
