import { Icon } from '@openedx/paragon';
import { ArrowForward } from '@openedx/paragon/icons';
import type { ReactNode } from 'react';

interface OptionProps {
  onClick: () => void;
  active: boolean;
  preSelected: boolean;
  children: ReactNode;
}

export const OptionComponent = ({
  onClick,
  children,
  active,
  preSelected,
}: OptionProps) => (
  <button
    className={`scenario-option-btn rounded-sm d-flex justify-content-start border-0 overflow-hidden align-items-center p-0 mb-3 ${active ? 'text-white bg-main active' : 'bg-white'} ${preSelected ? 'pre-selected' : ''}`}
    onClick={onClick}
  >
    <div className="flex-grow-1 text-left mx-3 px-3 my-3">{children}</div>
    <div className="h-100 bg-main d-flex align-items-center hover-arrow">
      <Icon src={ArrowForward} size="lg" className="text-white mx-3" />
    </div>
  </button>
);
