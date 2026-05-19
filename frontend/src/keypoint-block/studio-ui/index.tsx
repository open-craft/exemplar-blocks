import StudioUi from './studio-ui';
import { type XBlockData } from '../type';
import { type XBlockConfig, type XBlockRuntime } from '../../types';
import styles from './style.scss?inline';
import { createXBlockRoot } from '../../lib/utils.tsx';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  initData: XBlockData & XBlockConfig,
) => {
  const { header, keypoints, button_text, button_link, background_color } =
    initData;
  createXBlockRoot(
    runtime,
    element,
    initData,
    styles,
  )(
    <StudioUi
      initialHeader={header || ''}
      initialKeypoints={keypoints || []}
      initialButtonText={button_text || ''}
      initialButtonLink={button_link || ''}
      initialBackgroundColor={background_color || ''}
    />,
  );
};
