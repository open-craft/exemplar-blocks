import { createXBlockRoot, getRoot } from '../../lib/utils.tsx';
import StudioUI from './StudioUI';
import type { XBlockConfig, XBlockRuntime } from '../../types.ts';
import type { InitData } from '../types.ts';
import { newCard } from './utils';
import styles from './StudioUI.css?inline';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  context: { data: InitData; config: XBlockConfig },
) => {
  const container = getRoot(element);
  const saveUrl = runtime.handlerUrl(element, 'studio_save');
  if (!context.data.cards || !context.data.cards.length) {
    context.data.cards = [newCard()];
  }

  // The Modal Body has a hardcoded value of 435px in studio-main-v1.css
  // This effect updates that height to match make sure the full content is visible.
  const modalBody = container.parentElement?.parentElement;
  if (modalBody) {
    modalBody.style.minHeight = '635px';
  }

  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <StudioUI saveUrl={saveUrl} runtime={runtime} initData={context.data} />,
  );
};
