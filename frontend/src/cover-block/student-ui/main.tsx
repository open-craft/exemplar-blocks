import App from './App.tsx';
import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import type { CoverBlockFields } from '../apiTypes.ts';
import styles from './style.scss?inline';
import { createXBlockRoot } from '../../lib/utils.tsx';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  context: { data: CoverBlockFields; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App {...context.data} />,
  );
};
