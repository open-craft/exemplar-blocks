import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import App from './App.tsx';
import { createXBlockRoot } from '../../lib/utils.tsx';
import styles from './style.scss?inline';
import type { CoverBlockFields } from '../apiTypes.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  context: { data: CoverBlockFields; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App {...context.data} />,
  );
};
