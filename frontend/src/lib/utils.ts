import type { CSSProperties } from 'react';

export const deriveColor = (name: string, value: string): CSSProperties => {
  if (!value) {
    return {};
  }
  // Yes, some values would work here that aren't supported (i.e. #fff, rgb(0, 10, 20))
  // We don't care. We're not using them.
  if (value.match(/^#([0-9]|[a-f]){6}$/i)) {
    return { color: value };
  }
  console.error(`Bogus color found for ${name}: ${value}`);
  return {};
};

export const getRoot = (element: Element | Element[] | null): Element => {
  const container =
    element && 'jquery' in element
      ? (element as unknown as Element[])[0]
      : element;

  if (!container || !(container instanceof Element)) {
    console.error('Invalid DOM element provided to renderBlock:', element);
    throw new Error('Invalid DOM Element. See previously logged details.');
  }
  return container;
};
