import {
  ModalBackdrop,
  ModalContentContainer,
} from '@openedx/paragon/dist/Modal/ModalLayer';
import type { ReactNode } from 'react';
import { FocusOn } from 'react-focus-on';

interface ModalBaseProps {
  title: string;
  onCancel: () => void;
  children: ReactNode;
}

// NOTE: we cannot use high level Paragon modals here,
// because they are attached to a root object outside of the xblock tree, so:
// - the custom styles aren't applied
// - they will open in the parent window, but we need it to open in the new tab created for the activity.
// So this base modal is a simplified and opinionated implementation of the Paragon modal, without the createPortal.
export const ModalBase = ({ onCancel, title, children }: ModalBaseProps) => {
  return (
    <FocusOn
      allowPinchZoom
      scrollLock
      enabled={true}
      onEscapeKey={onCancel}
      onClickOutside={onCancel}
      className="pgn__modal-layer"
    >
      <ModalContentContainer>
        <ModalBackdrop onClick={onCancel} />
        <div
          role="dialog"
          aria-label={title}
          className="pgn__modal pgn__modal-md pgn__modal-default p-3"
        >
          {children}
        </div>
      </ModalContentContainer>
    </FocusOn>
  );
};
