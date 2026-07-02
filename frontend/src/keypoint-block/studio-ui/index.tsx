import type { XBlockConfig } from '../../types.ts';
import StudioUi from './studio-ui';
import { type XBlockData } from '../type';
import {
  createXBlockRoot,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import styles from './style.scss?inline';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  context: { data: XBlockData; config: XBlockConfig },
) => {
  const { header, keypoints, button_text, button_link, background_color } =
    context.data;
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <StudioUi
      initialHeader={header || ''}
      initialKeypoints={keypoints || []}
      initialButtonText={button_text || ''}
      initialButtonLink={button_link || ''}
      initialBackgroundColor={background_color || ''}
    />,
  );
};
