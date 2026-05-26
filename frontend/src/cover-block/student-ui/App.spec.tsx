import { describe, expect, it } from 'vitest';
import { Variant, ImagePosition } from '../apiTypes.ts';
import { initDataFactory, specRender } from '../lib/specHelpers.tsx';
import App from './App.tsx';

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
  it('reverses column order when image_position is left', () => {
    const data = initDataFactory({
      variant: Variant.section,
      image_position: ImagePosition.left,
    });
    const { container } = specRender(<App {...data} />);
    const cols = container.querySelectorAll('.col-lg-5');
    expect(cols.length).toBe(2);
    // First col (image) gets order-lg-1, second col (text) gets order-lg-2
    expect(cols[0].className).toContain('order-lg-1');
    expect(cols[1].className).toContain('order-lg-2');
  });
});
