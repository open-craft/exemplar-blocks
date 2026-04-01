import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudioUi from './studio-ui';
import { type XBlockData } from '../type';
import { type XBlockRuntime } from '../../types';
import './style.scss';

export const renderBlock = (
  runtime: XBlockRuntime,
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

  const studioSaveUrl = runtime.handlerUrl(container, 'studio_save');
  ReactDOM.render(
    <React.StrictMode>
      <StudioUi
        initialHeader={header || ''}
        initialKeypoints={keypoints || []}
        initialButtonText={button_text || ''}
        initialButtonLink={button_link || ''}
        studioSaveUrl={studioSaveUrl}
        runtime={runtime}
      />
    </React.StrictMode>,
    container,
  );
};
