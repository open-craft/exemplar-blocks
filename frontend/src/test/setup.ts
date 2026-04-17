import '@testing-library/jest-dom';

// @dnd-kit uses ResizeObserver which is not available in jsdom
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Paragon's Sticky component uses IntersectionObserver which is not available in jsdom
globalThis.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

// @dnd-kit checks `event instanceof PointerEvent` but PointerEvent may not be
// exposed as a global in jsdom's module scope. Provide a shim so the check
// doesn't throw "Right-hand side of 'instanceof' is not an object".
if (!globalThis.PointerEvent) {
  globalThis.PointerEvent = class PointerEvent extends MouseEvent {
    constructor(type: string, params: PointerEventInit = {}) {
      super(type, params);
    }
  } as unknown as typeof PointerEvent;
}
