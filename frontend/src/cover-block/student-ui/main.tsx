import App from './App.tsx';
import type { XBlockRuntime } from '../../types.ts';
import type { CoverBlockFields } from '../apiTypes.ts';
import './style.scss';
import { createXBlockRoot } from '../../lib/utils.tsx';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  initData: CoverBlockFields,
) => {
  createXBlockRoot(runtime, element)(<App {...initData} />);
};
