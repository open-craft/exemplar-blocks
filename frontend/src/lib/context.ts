import { createContext } from 'react';
import type { XBlockRuntime } from '../types.ts';

const mockRuntime = (): XBlockRuntime => {
  return {
    handlerUrl(): string {
      return '';
    },
    notify(): void {},
  };
};

export interface RuntimeContextInterface {
  runtime: XBlockRuntime;
  element: Element;
}

export const RuntimeContext = createContext<RuntimeContextInterface>({
  runtime: mockRuntime(),
  element: document.createElement('div'),
});
