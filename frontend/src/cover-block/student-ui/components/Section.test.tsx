import { describe, it } from 'vitest';
import { initDataFactory, specRender } from '../../lib/specHelpers.tsx';
import Section from './Section.tsx';

describe('Section.tsx', () => {
  it('renders', () => {
    const data = initDataFactory();
    const screen = specRender(<Section {...data} />);
    screen.getByText('Section N');
  });
});
