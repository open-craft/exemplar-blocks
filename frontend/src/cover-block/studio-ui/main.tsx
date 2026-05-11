import type { XBlockRuntime } from '../../types.ts';
import App from './App.tsx';
import { createXBlockRoot } from '../../lib/utils.tsx';
import './style.scss';
import type { CoverBlockFields } from '../apiTypes.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  initData: CoverBlockFields,
) => {
  createXBlockRoot(runtime, element)(<App {...initData} />);
};
