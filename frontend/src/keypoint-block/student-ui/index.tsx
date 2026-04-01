import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudentUi from './student-ui';
import { type XBlockRuntime } from '../../types';
import { type XBlockData } from '../type';
import './style.scss';

export const renderBlock = (
  _runtime: XBlockRuntime,
  element: Element | null,
  { header, keypoints, button_text, button_link }: XBlockData,
) => {
  const container =
    element && 'jquery' in element
      ? (element as unknown as HTMLElement[])[0]
      : element;

  if (!container || !(container instanceof Element)) {
    console.error('Invalid DOM element provided to renderBlock:', element);
    return;
  }

  ReactDOM.render(
    <React.StrictMode>
      <StudentUi
        header={header || ''}
        keypoints={keypoints || []}
        buttonText={button_text || ''}
        buttonLink={button_link || ''}
      />
    </React.StrictMode>,
    container,
  );
};
