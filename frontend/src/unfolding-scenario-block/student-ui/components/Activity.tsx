import { type ScenarioData } from '../../apiTypes';
import { useState } from 'react';
import { OutcomeComponent } from './Outcome';
import { ActivityHeader } from './ActivityHeader';
import { ScenarioView } from './ScenarioView';
import { LeaveConfirmModal } from './LeaveConfirmModal';
import { RestartConfirmModal } from './RestartConfirmModal';

interface ActivityProps {
  onExit: () => void;
  data: ScenarioData;
}

export const Activity = ({ data, onExit }: ActivityProps) => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState<number>(0);
  const [modalType, setModalType] = useState<null | 'restart' | 'leave'>(null);

  const onReset = () => {
    setActiveScenarioIndex(0);
    setModalType(null);
  };

  const onContinue = () => {
    if (
      activeScenarioIndex + 1 >= data.scenarios.length &&
      data.outcome === null
    ) {
      // if there is no outcome page, then simply exit without prompting
      onExit();
    } else {
      setActiveScenarioIndex(activeScenarioIndex + 1);
    }
  };

  return (
    <div className="unfolding-scenario-activity-wrapper bg-offwhite d-flex flex-column">
      <ActivityHeader
        onClose={() => setModalType('leave')}
        title={data.name}
        onReset={() => setModalType('restart')}
        activeScenarioIndex={activeScenarioIndex}
        totalScenarios={data.scenarios.length}
      />
      {activeScenarioIndex < data.scenarios.length ? (
        <ScenarioView
          key={activeScenarioIndex} // ensure state for this component is local to the specific scenario
          scenario={data.scenarios[activeScenarioIndex]}
          onContinue={onContinue}
        />
      ) : (
        data.outcome && (
          <OutcomeComponent
            outcome={data.outcome}
            onRestart={() => setModalType('restart')}
            onExit={onExit}
            imageURL={data.introduction.imageURL}
          />
        )
      )}
      {modalType == 'leave' && (
        <LeaveConfirmModal
          onConfirm={onExit}
          onCancel={() => setModalType(null)}
        />
      )}
      {modalType == 'restart' && (
        <RestartConfirmModal
          onConfirm={onReset}
          onCancel={() => setModalType(null)}
        />
      )}
    </div>
  );
};
