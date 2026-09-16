import { describe, expect, it } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { Variant, ImagePosition } from '../apiTypes.ts';
import { initDataFactory } from '../lib/specHelpers.tsx';
import App from './App.tsx';

describe('App.tsx', () => {
  it('renders a course cover', () => {
    const data = initDataFactory({ variant: Variant.course });
    const screen = render(<App {...data} />);
    screen.getByTestId('course-cover');
  });
  it('renders a section cover', () => {
    const data = initDataFactory({ variant: Variant.section });
    const screen = render(<App {...data} />);
    screen.getByTestId('section-cover');
  });
  it('sets the section image-left layout modifier', () => {
    const data = initDataFactory({
      variant: Variant.section,
      image_position: ImagePosition.left,
    });
    const screen = render(<App {...data} />);
    expect(screen.getByTestId('section-cover')).toHaveClass(
      'section-cover--image-left',
    );
  });
});
