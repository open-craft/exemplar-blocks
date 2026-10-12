import { IconButton } from '@openedx/paragon';
import { Close } from '@openedx/paragon/icons';

interface ActivityCloseButtonProps {
  onClose: () => void;
}

export const ActivityCloseButton = ({ onClose }: ActivityCloseButtonProps) => (
  <IconButton
    className="text-icon-action-sec-neutral"
    src={Close}
    onClick={onClose}
    alt="Close activity"
  />
);
