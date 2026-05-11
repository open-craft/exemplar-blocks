import { createXBlockRoot } from '../../lib/utils.tsx';
import StudentUi from './student-ui';
import { type XBlockRuntime } from '../../types';
import { type XBlockData } from '../type';
import styles from './style.scss?inline';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  { header, keypoints, button_text, button_link }: XBlockData,
) => {
  createXBlockRoot(
    runtime,
    element,
    styles,
  )(
    <StudentUi
      header={header || ''}
      keypoints={keypoints || []}
      buttonText={button_text || ''}
      buttonLink={button_link || ''}
    />,
  );
};
