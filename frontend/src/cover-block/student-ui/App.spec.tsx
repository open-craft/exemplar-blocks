import { describe, it } from 'vitest';
import { initDataFactory, specRender } from '../lib/specHelpers.tsx';
import App from './App.tsx';
import { Variant } from '../apiTypes.ts';

describe('App.tsx', () => {
  it('renders a course cover', () => {
    const data = initDataFactory({ variant: Variant.course });
    const screen = specRender(<App {...data} />);
    screen.getByTestId('course-cover');
  });
  it('renders a section cover', () => {
    const data = initDataFactory({ variant: Variant.section });
    const screen = specRender(<App {...data} />);
    screen.getByTestId('section-cover');
  });
});
