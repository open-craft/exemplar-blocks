import { Button } from '@openedx/paragon';
import { ModalBase } from './ModalBase';

interface RestartConfirmModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export const RestartConfirmModal = ({
  onCancel,
  onConfirm,
}: RestartConfirmModalProps) => {
  return (
    <ModalBase onCancel={onCancel} title="Restart interactive?">
      <div className="m-3">
        <p className="font-size-md text-interact-headings font-weight-bold">
          Restart interactive?
        </p>
        <p className="text-sec-content">
          If you restart, your progress in this interactive will be lost.
        </p>
        <div className="d-flex justify-content-between">
          <Button
            variant="outline-unfolding-scenario-action"
            className="rounded-pill"
            onClick={onConfirm}
          >
            Restart
          </Button>
          <Button
            variant="unfolding-scenario-action"
            className="rounded-pill"
            onClick={onCancel}
          >
            Stay
          </Button>
        </div>
      </div>
    </ModalBase>
  );
};
