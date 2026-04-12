import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudioUi from './studio-ui';
import { type XBlockData } from '../type';
import { type XBlockRuntime } from '../../types';
import './style.scss';
import { getRoot } from '../../lib/utils.ts';
import { RuntimeContext } from '../../lib/context.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  { header, keypoints, button_text, button_link }: XBlockData,
) => {
  const container = getRoot(element);

  ReactDOM.render(
    <React.StrictMode>
      <RuntimeContext.Provider value={{ runtime, element: container }}>
        <StudioUi
          initialHeader={header || ''}
          initialKeypoints={keypoints || []}
          initialButtonText={button_text || ''}
          initialButtonLink={button_link || ''}
        />
      </RuntimeContext.Provider>
    </React.StrictMode>,
    container,
  );
};
