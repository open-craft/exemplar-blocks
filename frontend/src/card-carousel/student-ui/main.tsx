import { createXBlockRoot } from '../../lib/utils.tsx';
import StudentUI from './StudentUI.tsx';
import type { XBlockRuntime } from '../../types.ts';
import type { InitData } from '../types.ts';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  initData: InitData,
) => {
  createXBlockRoot(
    runtime,
    element,
  )(<StudentUI runtime={runtime} initData={initData} />);
};
