import { App } from './App.tsx';
import {
  createXBlockRoot,
  getRoot,
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
    runtime.notify('save', { state: 'start' });
    $.post(studioSaveUrl, JSON.stringify(data))
      .done(() => {
        runtime.notify('save', { state: 'end' });
      })
      .fail((data) => {
        console.log('Fail data:', data.responseJSON);
        runtime.notify('error', {
          title: 'Save Error',
          message: `Failed to save ideas overview block: {data.responseJSON.error}`,
        });
      });
  };

  const cancel = () => runtime.notify('cancel', {});

  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App initialData={context.data} onSave={save} onCancel={cancel} />,
  );
};
