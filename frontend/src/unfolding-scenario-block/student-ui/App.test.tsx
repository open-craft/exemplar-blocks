import { describe, it } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';

describe('App.tsx', () => {
  it('renders with minimal default data', () => {
    const data: Data = {
      displayName: '',
      scenarioData: {
        name: '',
        introduction: {
          heading: 'Intro',
          description: 'The introduction to this unfolding scenario',
          imageURL: 'https://picsum.photos/id/82/300',
        },
        scenarios: [],
        outcome: null,
      },
    };
    const screen = render(<App data={data} />);
    screen.getByText(/introduction to this unfolding scenario/);
    screen.getByText(/Launch/);
  });
});
