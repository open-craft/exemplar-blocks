import { useState } from 'react';
import { Icon, IconButton, Button } from '@openedx/paragon';
import { ArrowOutward, KeyboardReturn } from '@openedx/paragon/icons';
import { OptionComponent } from './OptionComponent';
import { type InteractionType, type Scenario } from '../../apiTypes';

interface ScenarioViewProps {
  scenario: Scenario;
  interactionType: InteractionType;
  onContinue: () => void;
  onSelectOption: (i: number) => void;
}

// TODO: implement mobile and tablet views of this. Note that the mobile view has quite different behaviour around the continue button, and probably animations will be different too.
export const ScenarioView = ({
  interactionType,
  scenario,
  onContinue,
  onSelectOption,
}: ScenarioViewProps) => {
  const [activeOptionIndex, setActiveOptionIndex] = useState<number | null>(
    null,
  );
  // a set of option indexes that the user has selected in this session
  const [selectedOptions, setSelectedOptions] = useState<Set<number>>(
    new Set(),
  );

  const selectOption = (i: number) => {
    setSelectedOptions(new Set([...selectedOptions, i]));
    setActiveOptionIndex(i);
    onSelectOption(i);
  };

  const isContinueEnabled =
    // In explore mode, only enable if user has clicked through all options
    (interactionType == 'Explore' &&
      selectedOptions.size == scenario.options.length) ||
    // In select one mode, enable if there is an active option currently
    (interactionType == 'SelectOne' && activeOptionIndex !== null);

  // TODO: implement slide transition for clicking continue
  return (
    <div className="pt-3 mx-3">
      <div className="position-relative w-100">
        <div
          className={`w-50 position-absolute ${activeOptionIndex !== null ? 'active' : ''} options-pane options-pane-1`}
        >
          <p className="font-size-lg font-weight-bold text-interact-accent">
            {scenario.heading}
          </p>
          <p className="text-interact-content pb-3">{scenario.description}</p>
          <div className="d-flex align-items-center mt-3 mb-2">
            <div className="arrow-bubble p-2 text-icon-interact-default">
              <Icon src={ArrowOutward} />
            </div>
            <span className="text-interact-headings font-size-medium font-weight-bold pl-2">
              {scenario.instructionTitle}
            </span>
          </div>
          <p className="text-interact-content">
            {scenario.instructionDescription}
          </p>
        </div>
        <div
          className={`d-flex w-50 position-absolute ${activeOptionIndex !== null ? 'active' : ''} options-pane options-pane-2`}
        >
          {activeOptionIndex !== null && (
            <div className="d-flex mr-3 align-items-center">
              <IconButton
                className="text-icon-action-sec-neutral"
                src={KeyboardReturn}
                alt="Return"
                onClick={() => setActiveOptionIndex(null)}
              />
            </div>
          )}
          <div className="flex-grow-1">
            <p className="text-interact-headings font-size-md font-weight-bold">
              {scenario.prompt}
            </p>
            <div className="d-flex flex-column flex-grow-1">
              {scenario.options.map((option, i) => (
                <OptionComponent
                  active={activeOptionIndex === i}
                  onClick={() => selectOption(i)}
                  preSelected={selectedOptions.has(i)}
                >
                  {option.value}
                </OptionComponent>
              ))}
            </div>
            <div className="d-flex justify-content-end">
              <Button
                variant="unfolding-scenario-action"
                className="rounded-pill"
                disabled={!isContinueEnabled}
                onClick={onContinue}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`w-50 position-absolute d-flex align-items-center ${activeOptionIndex !== null ? 'active' : ''} options-pane options-pane-3`}
        >
          {activeOptionIndex !== null
            ? scenario.options[activeOptionIndex].feedback
            : null}
        </div>
      </div>
    </div>
  );
};
