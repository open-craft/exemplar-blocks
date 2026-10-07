import { Button, Icon } from '@openedx/paragon';
import { type Outcome } from '../../apiTypes';
import { Close, Replay } from '@openedx/paragon/icons';

interface OutcomeProps {
  outcome: Outcome;
  onRestart: () => void;
  onExit: () => void;
  imageURL: string;
}

// TODO: support the variant outcome where selected options are displayed (under discussion)
// TODO: implement tablet and mobile variants
export const OutcomeComponent = ({
  outcome,
  onRestart,
  onExit,
  imageURL,
}: OutcomeProps) => (
  <div className="d-flex flex-grow-1">
    <div className="p-4-5" style={{ flex: '0 0 60%' }}>
      <p className="font-size-lg font-weight-bold text-secondary-700">
        {outcome.heading}
      </p>
      <p className="pb-3">{outcome.description}</p>
    </div>
    <div
      className="d-flex flex-column"
      style={{
        flex: '0 0 40%',
        backgroundImage: `linear-gradient(to bottom, transparent 60%, #FFF), url("${imageURL}")`,
        backgroundSize: 'cover',
      }}
    >
      <div className="fixed-bottom align-content-end text-right p-4-5">
        <Button
          variant="outline-unfolding-scenario-blue"
          className="rounded-pill"
          onClick={onRestart}
        >
          Restart <Icon src={Replay} />
        </Button>
        <Button
          variant="unfolding-scenario-blue"
          className="rounded-pill ml-3"
          onClick={onExit}
        >
          Exit <Icon src={Close} />
        </Button>
      </div>
    </div>
  </div>
);
