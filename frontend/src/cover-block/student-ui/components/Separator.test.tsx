import { describe, it } from 'vitest';
import { initDataFactory, specRender } from '../../lib/specHelpers.tsx';
import Separator from './Separator.tsx';

describe('Separator.tsx', () => {
  it('renders', () => {
    const data = initDataFactory();
    const screen = specRender(<Separator {...data} />);
    screen.getByText('Section N');
  });
});
