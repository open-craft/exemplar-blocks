import {
  createXBlockRoot,
  type XBlockConfig,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import StudentUI from './StudentUI.tsx';
import type { InitData } from '../types.ts';
import styles from './StudentUI.css?inline';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  context: { data: InitData; config: XBlockConfig },
) => {
  createXBlockRoot({
    runtime,
    element,
    config: context.config,
    styles: styles,
  })(<StudentUI runtime={runtime} initData={context.data} />);
};
