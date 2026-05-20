import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import type { Data } from '../apiTypes.ts';
import { createXBlockRoot } from '../../lib/utils.tsx';

import { App } from './App.tsx';
import styles from './main.scss?inline';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: Data; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App data={context.data} />,
  );
};
