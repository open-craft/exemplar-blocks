import { describe, it } from 'vitest';
import { initDataFactory, specRender } from '../lib/specHelpers.tsx';
import App from './App.tsx';

describe('App.tsx', () => {
  it('renders a course cover', () => {
    const data = initDataFactory({ variant: 'course' });
    const screen = specRender(<App {...data} />);
    screen.getByTestId('course-cover');
  });
  it('renders a section cover', () => {
    const data = initDataFactory({ variant: 'section' });
    const screen = specRender(<App {...data} />);
    screen.getByTestId('section-cover');
  });
});
