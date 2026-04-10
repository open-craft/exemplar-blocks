import type { XBlockRuntime } from '../types';
import { vi, beforeEach, afterEach } from 'vitest';

export const mockRuntime = (): XBlockRuntime => {
  return {
    notify: vi.fn(),
    handlerUrl: vi
      .fn()
      .mockImplementation((_element, name: string) => `/handler/${name}`),
  };
};

// ── jQuery mock ──────────────────────────────────────────────────────────────
// $.post returns a jQuery-style deferred with .done()/.fail() chaining.
interface MockDeferred {
  done: (cb: () => void) => MockDeferred;
  fail: (cb: () => void) => MockDeferred;
  _resolveDone: () => void;
  _resolveFail: () => void;
}

function createMockDeferred(): MockDeferred {
  let doneCb: (() => void) | null = null;
  let failCb: (() => void) | null = null;
  const deferred: MockDeferred = {
    done(cb) {
      doneCb = cb;
      return deferred;
    },
    fail(cb) {
      failCb = cb;
      return deferred;
    },
    _resolveDone() {
      doneCb?.();
    },
    _resolveFail() {
      failCb?.();
    },
  };
  return deferred;
}

export const stubJquery = () => {
  // Call this within describe to stub out the calls to JQuery for testing.
  let lastDeferred: MockDeferred | undefined;

  const mockPost = vi.fn(() => {
    lastDeferred = createMockDeferred();
    return lastDeferred;
  });

  const getLastDeferred = () => lastDeferred;

  let originalJq: unknown = undefined;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    originalJq = (globalThis as any).$;
    // Assign to globalThis so the component's `$.post(...)` calls hit our mock.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).$ = { post: mockPost };
  });

  afterEach(() => {
    mockPost.mockClear();
    lastDeferred = undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).$ = originalJq;
  });
  return { getLastDeferred, mockPost };
};
