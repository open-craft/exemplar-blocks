import { describe, it } from 'vitest';
import { initDataFactory, specRender } from '../../lib/specHelpers.tsx';
import Course from './Course.tsx';

describe('Course.tsx', () => {
  it('renders', () => {
    const data = initDataFactory();
    const screen = specRender(<Course {...data} />);
    screen.getByText('Section N');
  });
});
