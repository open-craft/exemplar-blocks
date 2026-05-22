import Button from '@openedx/paragon/dist/Button';
import Stack from '@openedx/paragon/dist/Stack';
import Sticky from '@openedx/paragon/dist/Sticky';
import type { XBlockRuntime } from '../../../types';

interface ModalFooterProps {
  runtime: XBlockRuntime;
  showingEditor: boolean;
  onContinue: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ModalFooter({
  runtime,
  showingEditor,
  onContinue,
}: ModalFooterProps) {
  return (
    <Sticky
      position="bottom"
      className="p-4 border-top card-carousel-editor-modal-footer justify-content-end"
    >
      <Stack direction="horizontal" gap={4}>
        <Button
          variant="light"
          className="action-button"
          onClick={() => runtime.notify('cancel', {})}
          type="button"
        >
          Cancel
        </Button>
        {showingEditor ? (
          <Button variant="primary" type="submit" className="save-button">
            Save
          </Button>
        ) : (
          <Button
            type="button"
            variant="primary"
            className="save-button"
            onClick={onContinue}
          >
            Continue
          </Button>
        )}
      </Stack>
    </Sticky>
  );
}
