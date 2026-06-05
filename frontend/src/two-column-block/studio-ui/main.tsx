import { App } from './App.tsx';
import {
  createXBlockRoot,
  getRoot,
  saveStudioBlock,
  type XBlockConfig,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';

import type { Data } from '../apiTypes.ts';
import styles from './main.scss?inline';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: Data; config: XBlockConfig },
) => {
  const container = getRoot(element);

  const studioSaveUrl = runtime.handlerUrl(container, 'studio_save');
  const save = (data: Data) => {
    saveStudioBlock<Data>({
      saveUrl: studioSaveUrl,
      data,
      runtime,
      errorMessage: (response) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        `Failed to save two-column block: ${(response as any).responseJSON.error}`,
    });
  };

  const cancel = () => runtime.notify('cancel', {});

  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App initialData={context.data} onSave={save} onCancel={cancel} />,
  );
};
