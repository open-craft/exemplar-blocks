import { describe, it } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { initDataFactory } from '../../lib/specHelpers.tsx';
import Course from './Course.tsx';

describe('Course.tsx', () => {
  it('renders', () => {
    const data = initDataFactory();
    const screen = render(<Course {...data} />);
    screen.getByText('Section N');
  });
});
