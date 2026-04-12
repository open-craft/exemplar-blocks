import { ActionRow, Button, Container } from '@openedx/paragon';
import { useContext } from 'react';
import { RuntimeContext } from '../../../lib/context.ts';
import CoverForm from './CoverForm.tsx';
import { useFormikContext } from 'formik';

const Editor = () => {
  const { runtime } = useContext(RuntimeContext);
  const form = useFormikContext();
  return (
    <div className="react-studio-block">
      <Container className="editor-with-buttons">
        <div className="studio-editor-scroll">
          <CoverForm />
        </div>
      </Container>
      <div className="xblock-actions">
        <ActionRow>
          <ActionRow.Spacer />
          <Button
            variant="tertiary"
            size="lg"
            onClick={() => runtime.notify('cancel', {})}
          >
            Cancel
          </Button>
          <Button variant="primary" size="lg" onClick={form.submitForm}>
            Save
          </Button>
        </ActionRow>
      </div>
    </div>
  );
};

export default Editor;
