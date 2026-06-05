import { describe, it } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { initDataFactory } from '../../lib/specHelpers.tsx';
import Section from './Section.tsx';

describe('Section.tsx', () => {
  it('renders', () => {
    const data = initDataFactory();
    const screen = render(<Section {...data} />);
    screen.getByText('Section N');
  });
});
