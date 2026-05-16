import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import type { Data } from '../apiTypes.ts';
import { createXBlockRoot } from '../../lib/utils.tsx';

import { App } from './App.tsx';
import styles from './main.scss?inline';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  data: Data & XBlockConfig,
) => {
  createXBlockRoot(runtime, element, data, styles)(<App data={data} />);
};
