import { useState } from 'react';
import { Row, Col, Icon, IconButton, Button } from '@openedx/paragon';
import { ArrowOutward, KeyboardReturn } from '@openedx/paragon/icons';
import { OptionComponent } from './OptionComponent';
import { type InteractionType, type Scenario } from '../../apiTypes';

interface ScenarioViewProps {
  scenario: Scenario;
  interactionType: InteractionType;
  onContinue: () => void;
  onSelectOption: (i: number) => void;
}

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

  // TODO: implement mobile and tablet views of this
  // TODO: implement slide transitions:
  //       - clicking on an option
  //       - clicking return from selecting an option
  //       - clicking continue

  if (activeOptionIndex === null) {
    return (
      <Row className="pt-3 mx-3">
        <Col>
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
        </Col>
        <Col>
          <p className="text-interact-headings font-size-md font-weight-bold">
            {scenario.prompt}
          </p>
          <div className="d-flex flex-column flex-grow-1">
            {scenario.options.map((option, i) => (
              <OptionComponent
                active={false}
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
              onClick={onContinue}
              disabled={!isContinueEnabled}
            >
              Continue
            </Button>
          </div>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row className="pt-3 mx-3">
        <Col xs="1" className="d-flex align-items-center">
          <IconButton
            className="text-icon-action-sec-neutral"
            src={KeyboardReturn}
            alt="Return"
            onClick={() => setActiveOptionIndex(null)}
          />
        </Col>
        <Col xs="5">
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
        </Col>
        <Col className="d-flex align-items-center">
          {
            scenario.options[activeOptionIndex]
              .feedback /* TODO: complete this once the data structures for feedback and icon are finalised */
          }
        </Col>
      </Row>
    );
  }
};
