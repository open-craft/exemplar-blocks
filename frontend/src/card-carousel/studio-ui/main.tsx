import { createXBlockRoot, getRoot } from '../../lib/utils.tsx';
import StudioUI from './StudioUI';
import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import type { InitData } from '../types.ts';
import { newCard } from './utils';
import styles from './StudioUI.css?inline';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  initData: InitData & XBlockConfig,
) => {
  const container = getRoot(element);
  const saveUrl = runtime.handlerUrl(element, 'studio_save');
  if (!initData.cards || !initData.cards.length) {
    initData.cards = [newCard()];
  }

  // The Modal Body has a hardcoded value of 435px in studio-main-v1.css
  // This effect updates that height to match make sure the full content is visible.
  const modalBody = container.parentElement?.parentElement;
  if (modalBody) {
    modalBody.style.minHeight = '635px';
  }

  createXBlockRoot(
    runtime,
    element,
    initData,
    styles,
  )(<StudioUI saveUrl={saveUrl} runtime={runtime} initData={initData} />);
};
