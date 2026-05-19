import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import App from './App.tsx';
import { createXBlockRoot } from '../../lib/utils.tsx';
import styles from './style.scss?inline';
import type { CoverBlockFields } from '../apiTypes.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  initData: CoverBlockFields & XBlockConfig,
) => {
  createXBlockRoot(runtime, element, initData, styles)(<App {...initData} />);
};
