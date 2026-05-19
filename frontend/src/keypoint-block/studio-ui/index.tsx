import StudioUi from './studio-ui';
import { type XBlockData } from '../type';
import { type XBlockRuntime } from '../../types';
import styles from './style.scss?inline';
import { createXBlockRoot } from '../../lib/utils.tsx';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  { header, keypoints, button_text, button_link, background_color }: XBlockData,
) => {
  createXBlockRoot(
    runtime,
    element,
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
