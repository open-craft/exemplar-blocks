import App from './App.tsx';
import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import type { CoverBlockFields } from '../apiTypes.ts';
import styles from './style.scss?inline';
import { createXBlockRoot } from '../../lib/utils.tsx';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  initData: CoverBlockFields & XBlockConfig,
) => {
  createXBlockRoot(runtime, element, initData, styles)(<App {...initData} />);
};
