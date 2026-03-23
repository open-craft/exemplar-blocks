import { useContext } from 'react';
import { RuntimeContext } from './context.ts';

export const useHandlerUrl = (handlerName: string) => {
  const context = useContext(RuntimeContext);
  return context.runtime.handlerUrl(context.element, handlerName);
};
