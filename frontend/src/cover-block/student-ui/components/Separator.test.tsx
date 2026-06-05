import { describe, it } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { initDataFactory } from '../../lib/specHelpers.tsx';
import Separator from './Separator.tsx';

describe('Separator.tsx', () => {
  it('renders', () => {
    const data = initDataFactory();
    const screen = render(<Separator {...data} />);
    screen.getByText('Section N');
  });
});
