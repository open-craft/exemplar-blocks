import { useState } from 'react';
import { Row, Col, Icon, IconButton, Button } from '@openedx/paragon';
import { ArrowOutward, KeyboardReturn } from '@openedx/paragon/icons';
import { OptionComponent } from './OptionComponent';
import { type Scenario } from '../../apiTypes';

interface ScenarioViewProps {
  scenario: Scenario;
  onContinue: () => void;
}

export const ScenarioView = ({ scenario, onContinue }: ScenarioViewProps) => {
  const [activeOptionIndex, setActiveOptionIndex] = useState<number | null>(
    null,
  );
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const selectOption = (i: number) => {
    setSelectedOptions([...selectedOptions, i]);
    setActiveOptionIndex(i);
  };

  // TODO: implement mobile and tablet views of this
  // TODO: implement slide transitions:
  //       - clicking on an option
  //       - clicking return from selecting an option
  //       - clicking continue

  if (activeOptionIndex === null) {
    return (
      <Row className="pt-3 mx-3">
        <Col>
          <p className="font-size-lg font-weight-bold text-secondary-700">
            {scenario.heading}
          </p>
          <p className="pb-3">{scenario.description}</p>
          <div className="d-flex align-items-center mt-3 mb-2">
            <div className="arrow-bubble p-2">
              <Icon src={ArrowOutward} />
            </div>
            <span className="text-main font-size-medium font-weight-bold pl-2">
              {scenario.instructionTitle}
            </span>
          </div>
          <p>{scenario.instructionDescription}</p>
        </Col>
        <Col>
          <p className="text-main font-size-md font-weight-bold">
            {scenario.prompt}
          </p>
          <div className="d-flex flex-column flex-grow-1">
            {scenario.options.map((option, i) => (
              <OptionComponent
                active={false}
                onClick={() => selectOption(i)}
                preSelected={selectedOptions.includes(i)}
              >
                {option.value}
              </OptionComponent>
            ))}
          </div>
          <div className="d-flex justify-content-end">
            <Button
              variant="unfolding-scenario-blue"
              className="rounded-pill"
              onClick={onContinue}
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
            src={KeyboardReturn}
            alt="Return"
            onClick={() => setActiveOptionIndex(null)}
          />
        </Col>
        <Col xs="5">
          <p className="text-main font-size-md font-weight-bold">
            {scenario.prompt}
          </p>
          <div className="d-flex flex-column flex-grow-1">
            {scenario.options.map((option, i) => (
              <OptionComponent
                active={activeOptionIndex === i}
                onClick={() => selectOption(i)}
                preSelected={selectedOptions.includes(i)}
              >
                {option.value}
              </OptionComponent>
            ))}
          </div>
          <div className="d-flex justify-content-end">
            <Button
              variant="unfolding-scenario-blue"
              className="rounded-pill"
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
