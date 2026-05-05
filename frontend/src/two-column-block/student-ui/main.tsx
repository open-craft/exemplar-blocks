import type { XBlockRuntime } from '../../types.ts';
import type { Data } from '../apiTypes.ts';
import { createXBlockRoot } from '../../lib/utils.tsx';

import { App } from './App.tsx';

export const renderBlock = (
  _runtime: XBlockRuntime,
  element: Element,
  data: Data,
) => {
  createXBlockRoot(_runtime, element)(<App data={data} />);
};
