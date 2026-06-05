import { ActionRow, Button, Container } from '@openedx/paragon';
import { useContext } from 'react';
import { RuntimeContext } from '@opencraft/xblock-react-utils';
import CoverForm from './CoverForm.tsx';
import { useFormikContext } from 'formik';

const Editor = () => {
  const { runtime } = useContext(RuntimeContext);
  const form = useFormikContext();
  return (
    <div className="react-studio-block">
      <Container className="editor-with-buttons">
        <div className="wrapper-comp-settings is-active">
          <CoverForm />
        </div>
        <div className="xblock-actions">
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
      </Container>
    </div>
  );
};

export default Editor;
