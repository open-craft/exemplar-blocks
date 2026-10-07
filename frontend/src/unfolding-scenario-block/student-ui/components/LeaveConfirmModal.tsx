import { Button } from '@openedx/paragon';
import { ModalBase } from './ModalBase';

interface LeaveConfirmModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export const LeaveConfirmModal = ({
  onCancel,
  onConfirm,
}: LeaveConfirmModalProps) => {
  return (
    <ModalBase onCancel={onCancel} title="Leave interactive?">
      <div className="m-3">
        <p className="font-size-md text-main font-weight-bold">
          Leave interactive?
        </p>
        <p>If you leave now, your progress in this interactive will be lost.</p>
        <div className="d-flex justify-content-between">
          <Button
            variant="outline-unfolding-scenario-blue"
            className="rounded-pill"
            onClick={onConfirm}
          >
            Leave
          </Button>
          <Button
            variant="unfolding-scenario-blue"
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
