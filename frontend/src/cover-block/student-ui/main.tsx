import App from './App.tsx';
import {
  createXBlockRoot,
  type XBlockConfig,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import type { CoverBlockFields } from '../apiTypes.ts';
import styles from './style.scss?inline';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  context: { data: CoverBlockFields; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App {...context.data} />,
  );
};
