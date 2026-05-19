import { createXBlockRoot } from '../../lib/utils.tsx';
import StudentUI from './StudentUI.tsx';
import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import type { InitData } from '../types.ts';
import styles from './StudentUI.css?inline';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  initData: InitData & XBlockConfig,
) => {
  createXBlockRoot(
    runtime,
    element,
    initData,
    styles,
  )(<StudentUI runtime={runtime} initData={initData} />);
};
